import net from 'net'; 

const client = new net.Socket(); 

client.connect(3000, 'localhost', () => {
    console.log('Connected to server');
    
    client.write('Hello from client'); 
} )

client.on('data', (data) => {
    console.log('Received data from server:', data.toString()); 

    client.end(); 
}) 

client.on('close', () => {
    console.log('Connection closed');
    
}) 

client.on('error', (err) => {
    console.log('Error:', err);
})