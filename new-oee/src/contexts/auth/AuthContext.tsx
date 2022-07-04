import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";

import api from '../../services/api';
import { SocketActions, useSocket } from "../socket/socket";

interface IUser {
    id: string;
    name: string;
    email: string;
    role: string;
    /*   avatar_url: string;
      role: string;
      company_id: string; */
}

// define o tipo dos estados de autenticação
interface AuthState {
    token: string;
    user: IUser;
    refresh_token: string;
}

// define o tipo das credenciais do signin
interface SingInCredentials {
    email: string;
    password: string;
}
type AuthProviderProps = {
    children: ReactNode;
}

// define o tipo dos dados do contexto de autenticação
interface AuthContextData {
    user: IUser;
    signIn(crenditials: SingInCredentials): Promise<void>;
    signOut(): void;
    updateUser(user: IUser): void;
}

interface DecodedProps {
    [key: string]: string | Number;
    exp: number;
}

// cria o contexto de autenticação
const AuthContext = createContext<AuthContextData>({} as AuthContextData);



// cria o provedor do contexto
const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const { stateSocket, dispatch } = useSocket();

    // define o estado inicial dos dados
    const [data, setData] = useState<AuthState>(() => {
        // O usuário precisar sempre se connectar primeiro ao socket para depois entrar na aplicação
        // como não está feito foi preciso ser comentado
        /*
        // busca no local storage os dados
        const token = localStorage.getItem('@Oee:token');
        const user = localStorage.getItem('@Oee:user');
        const refresh_token = localStorage.getItem('@Oee:refresh_token');
    
        // se houver dados no storage, retorna um objeto com esses dados
        if (token && user && refresh_token) {
          const decoded: DecodedProps = jwtDecode(token);
          //console.log("Produzindo")
          const expirationTime = (decoded.exp * 1000);
    
          if (Date.now() >= expirationTime) {
            dispatch({
              type: SocketActions.setUser,
              payload: null,
            })
            //console.log("qualquer coisa")
            // retorna um objeto vazio
            return {} as AuthState;
          }
    
          api.defaults.headers.common.authorization = `Bearer ${token}`;
    
          dispatch({
            type: SocketActions.setUser,
            payload: user,
          })
    
          return { token, user: JSON.parse(user), refresh_token };
        }
        */


        // retorna um objeto vazio
        return {} as AuthState;

    });

    useEffect(() => {
        dispatch({
            type: SocketActions.setUser,
            payload: null,
        })
    }, [])

    // função de signin usando callback
    const signIn = useCallback(async ({ email, password }: any) => {
        console.log("chegou")
        // faz a coneção da rota passando os dados
        //const response = await api.post('/sessions', { email, password });

        const responseSession = await api.post('/dashboard/sessions', { email, password });
        // guardar os dados da resposta
        const { token, refresh_token, user } = responseSession.data;

        // salva os dados no local storage
        localStorage.setItem('@Oee:token', token);
        localStorage.setItem('@Oee:refresh_token', refresh_token);


        api.defaults.headers.common.authorization = `Bearer ${token}`;
        localStorage.setItem('@Oee:user', JSON.stringify(user));
        console.log(responseSession.data);

        //segunda requisição ao back
        const responseProfile = await api.get('users/dashboard/profile');

        const profile = responseProfile.data;
        localStorage.setItem('@Oee:role', profile.role);  //Pega a permissão que o usuário possui
        localStorage.setItem('@Oee:user_id', profile.id); //Pega o id do usuário

        console.log(profile);
        console.log(profile.role);

        // const responseUser = await api.get('/dashboard/profile');
        // const requestToken = responseUser.data;

        // localStorage.setItem('@Oee:user', JSON.stringify(profile));

        // Adicionar user_id para objeto
        responseSession.data.user.user_id = profile.id;

        dispatch({
            type: SocketActions.setUser,
            payload: responseSession.data.user,
        })

        console.log(responseSession.data.user);

        // Apenas se conseguir connectar podemos entrar no sistema
        stateSocket.ioSocket.on("connect", () => {
            //console.log(responseSession.data.user);

            if (stateSocket.ioSocket.connected) {
                // // atualiza o estado dos dados
                setData({ token: responseSession.data.token, user: responseSession.data.user, refresh_token: responseSession.data.refresh_token });
            }
            else {
                // atuliaza o estado global do hook com um objeto vazio
                setData({} as AuthState);
            }
        });


        /* //console.log(token);
        //console.log(user);
        //console.log(refresh_token); */
    }, []);

    // função de signout usando callback
    const signOut = useCallback(() => {
        // limpa os dados do local storage
        localStorage.removeItem('@Oee:token');
        localStorage.removeItem('@Oee:user');
        localStorage.removeItem('@Oee:refresh_token');
        localStorage.removeItem('@Oee:role');
        localStorage.removeItem('@Oee:user_id');

        dispatch({
            type: SocketActions.setUser,
            payload: null,
        })
        // atuliaza o estado global do hook com um objeto vazio
        setData({} as AuthState);
    }, []);

    const updateUser = useCallback((user: IUser) => {
        // salva os dados no local storage
        localStorage.setItem('@Oee:user', JSON.stringify(user));

        setData({
            token: data.token, //Talvez um user.token
            user,
            refresh_token: data.refresh_token, //Talvez um user.refresh_token
        });
    },
        [setData, data.token, data.refresh_token]);

    // retorna o provider envolvendo os outros components
    return (
        <AuthContext.Provider value={{
            user: data.user, signIn, signOut, updateUser,
        }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// função para retornar o contexto de autenticação da aplicação
function useAuth(): AuthContextData {
    // atribui o contexto ao hook
    const context = useContext(AuthContext);



    // se não existir retorna um erro
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    // retorna o contexto
    return context;
}

// exporta o provedor e o hook de autenticação
export { AuthProvider, useAuth };
