const userList = [
    {
        name: 'elwyndeneve',
        password: 'password123',
        orders: ['ID_123', 'ID_789']
    },
    {
        name: 'novaeeken',
        password: 'p@ssword!',
        orders: ['ID_456'],
    }
]

const orderList = [
    {
        orderNumber: 'ID_123',
        products: ['pindakaas', 'tomaten', 'roomboter']
    },
    {
        orderNumber: 'ID_456',
        products: ['melk', 'eieren']
    },
    {
        orderNumber: 'ID_789',
        products: ['cola', 'raketjes', 'chips', 'brood']
    }
]

// STAPPENPLAN:
// STAP 1 - Creëer een functie die een lijst van aangekochte producten kan retourneren
// STAP 2 - Plaats de code in de functie
// STAP 3 - Vervang de variabelen met parameters en plaats deze op de plek waar je eerst variabelen verwachte

function getOrderHistory( userName, userPassword ){

    let output = [];

    for ( let i = 0; i < userList.length; i++ ) {
        if ( userName === userList[i].name && userPassword === userList[i].password ) {

            console.log('Hello ' + userName + ' you username /password combination is correct');

            for ( let j = 0; j < orderList.length; j++ ) {
                /*            if ( userList[i].orders === orderList[j].orderNumber){

                                console.log('Your order-number ' + userList[i].orders + ' is found in our database' );
                                output = orderList[j].products
                            }*/

                for ( let k = 0; k < userList[i].orders.length; k++ ) {

                    if ( userList[i].orders[k] === orderList[j].orderNumber ) {

                        for ( let l = 0; l < orderList[j].products.length; l++ ) {
                            output.push( orderList[j].products[l] )
                        }

                    }

                }

            }
            console.log('Here is your order history: ');
            console.log(output);
        }
    }
}

getOrderHistory('elwyndeneve', 'password123');
getOrderHistory('novaeeken', 'p@ssword!')