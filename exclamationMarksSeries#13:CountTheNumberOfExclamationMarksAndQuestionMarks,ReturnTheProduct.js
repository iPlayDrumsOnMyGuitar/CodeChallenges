/* Exclamation marks series #13: Count the number of exclamation marks and question marks, return the product

Description:
Count the number of exclamation marks and question marks, return the product.

Examples
Product("") == 0
product("!") == 0
Product("!ab? ?") == 2
Product("!!") == 0
Product("!??") == 2
Product("!???") == 3
Product("!!!??") == 6
Product("!!!???") == 9
Product("!???!!") == 9
Product("!????!!!?") == 20
 */

function product (string) {
  
    const counts = string.split('').reduce((acc, item ) => {
  
        if(item === '!'){
  
            acc[0] = acc[0] + 1;
  
        } if(item === '?') {
  
            acc[1] = acc[1] + 1;
  
        } return acc;
  
    }, [0,0])
  
    return counts[0] * counts[1]
  
}



