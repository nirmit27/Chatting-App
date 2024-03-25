import java.io.*;
import java.net.*;
import java.util.Scanner;

public class Client {
    private Scanner input = null;
    private Socket socket = null;
    private DataOutputStream out = null;

    public Client(String address, int port) {
        try {
            socket = new Socket(address, port);
            System.out.println("\nConnected to server\n");

            input = new Scanner(System.in);

            out = new DataOutputStream(
                    socket.getOutputStream());
        } catch (UnknownHostException u) {
            System.out.println(u);
            return;
        } catch (IOException i) {
            System.out.println(i);
            return;
        }

        String line = "";

        while (!line.equals("Over")) {
            try {
                line = input.nextLine();
                out.writeUTF(line);
            } catch (IOException i) {
                System.out.println(i);
            }
        }

        try {
            input.close();
            out.close();
            socket.close();
        } catch (IOException i) {
            System.out.println(i);
        }
    }

    public static void main(String args[]) {
        new Client("127.0.0.1", 5000);
    }
}
