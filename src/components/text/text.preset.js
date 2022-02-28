import { colors,typography } from "../../theme";

const BASE={
    fontFamily:typography.primary,
    colors:colors.white,
    fontSize:14,
}

const BASE_BOLD={
    fontFamily:typography.primaryBold,
    colors:colors.white,
   
}

const BOLD={
    fontFamily:typography.bold,
    colors:colors.white,
    
}

export const presets={
    default:BASE,
    bold:BOLD,
    h1:{
        ...BOLD,
        fontSize:28
    },
    h2:{
        ...BOLD,
        fontSize:30
    },
    h3:{
        ...BASE_BOLD,
        fontSize:28
    },
    h4:{
        ...BASE_BOLD,
        fontSize:28
    },
}
