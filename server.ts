import { log } from 'console';
import { Socket } from 'dgram'
import net from 'net':

const server = net.createServer((Socket) => {
    console.log('Client connected'); 

    Socket.on('data', (data) => {
        console.log('Received data from client:', data.toString());

    Socket.write('Hello from server');   
    }) 


    Socket.on('end', () => {
        console.log('Client disconnected');
    })  
    
    Socket.on('error',(err) => {
        console.log('Error:', err);
    }) 
})   

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
})


