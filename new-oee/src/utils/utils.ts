


export function getColorByMachineStatus(status: String){

    switch (status) {
        case 'Produzindo':
            return '#1C8A55'
            break;
        case 'Fora do turno':
            return '#1C8A55'
            break;
        case 'Parada':
            return '#C02B2B'
            break;
        default:
            return '#878A8C'
            break;
    }
    
}