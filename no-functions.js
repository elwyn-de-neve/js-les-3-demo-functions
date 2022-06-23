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

// Wij zijn gevraagd om een applicatie te ontwikkelen voor een bezorgdienst, die jouw aankoop geschiedenis toont.
// Ze houden in één database een lijst van users bij. Per user hebben we een object dat bestaat uit een gebruikersnaam, paswoord en een order (Bonus: een lijst van orders).
// In de andere database staat een lijst van orders. Per order hebben we een object met daarin het ordernummer en de aangekochte producten.

// STAPPENPLAN:
// STAP 1 - Aanmaken van variabelen voor opgegeven gebruikersnaam en wachtwoord
// STAP 2 - Aanmaken van variabele voor de output
// STAP 3 - Itereren door de lijst van users
// STAP 4 - Check of opgegeven gebruikersnaam en wachtwoord overeenkomen met die uit de database
// CHECK - Log een juiste username & password combinatie
// STAP 5 - Itereren door de lijst van aangekochte producten
// STAP 6 - Check of de order voorkomt in de lijst van orders
// STAP 7 - Voeg de lijst van order toe aan de output variabele



let userName = 'elwyndeneve';
let userPassword = 'password123';

let output = []

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