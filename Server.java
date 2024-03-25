import java.io.*;
import java.net.*;

public class Server {
    private Socket socket = null;
    private ServerSocket server = null;
    private DataInputStream in = null;

    public Server(int port) {
        try {
            server = new ServerSocket(port);
            System.out.println("\nServer started\nWaiting for a client ...");

            socket = server.accept();
            System.out.println("\nClient accepted\n");

            in = new DataInputStream(
                    new BufferedInputStream(socket.getInputStream()));

            String line = "";

            while (!line.equals("Over")) {
                try {
                    line = in.readUTF();
                    System.out.println(line);

                } catch (IOException i) {
                    System.out.println(i);
                }
            }
            System.out.println("\nClosing connection ...\n");

            socket.close();
            in.close();
        } catch (IOException i) {
            System.out.println(i);
        }
    }

    public static void main(String args[]) {
        new Server(5000);
    }
}
