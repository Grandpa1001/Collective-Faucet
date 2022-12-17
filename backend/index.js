const WebSocket = require('ws');

const port = 8080;

const wss = new WebSocket.Server({ port: port });

console.log(`Kranik kolektywu odpalony na porcie: ${port}`)

// Przykładowy payload
// {
//     submittedBy: "adres członka kolektywu",
//     destination: "adres do wypłaty"
// }

wss.on("connection", function connection(ws)
{

    ws.send("Połączono z serwerem")
    console.log("Połączono z klientem")

    ws.on("message", function message(data) 
    {

        try
        {

            const data = JSON.parse(data)

            //pod debug
            console.log(data)

            if (data.submittedBy && data.destination) 
            {
                // Interakcja z kontraktem albo walletem
            }
        
        } 
        catch (e) 
        {
            console.log(e)
        }
    })
})