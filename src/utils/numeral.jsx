import numeral from 'numeral'
import 'numeral/locales'

numeral.locale('pt-br')
numeral.defaultFormat('$ 0,00.00')
export default numeral
