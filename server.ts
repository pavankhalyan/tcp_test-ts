import { log } from 'console';
import { Socket } from 'dgram'
import net from 'net':

const server = net.createServer((Socket) => {
    console.log('Client connected'); 

    Socket.on('data', (data) => {
        console.log('Received data from client:', data.toString());

    Socket.write('Hello from server');
        
    })
})