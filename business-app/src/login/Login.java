package login;

import javafx.application.Application;
import javafx.application.Platform;
import javafx.event.ActionEvent;
import javafx.fxml.FXMLLoader;
import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;
import javafx.scene.layout.GridPane;
import javafx.scene.paint.Color;
import javafx.scene.text.Font;
import javafx.scene.text.FontWeight;
import javafx.scene.text.Text;
import javafx.stage.Stage;

public class Login extends Application {

    Stage window;
    TextField inputUser;
    PasswordField inputPassword;
    Text loginStatus;

    @Override
    public void start(Stage loginStage) throws Exception {
        System.out.println("🟢 Application started !");

        Parent root = FXMLLoader.load(getClass().getResource("Login.fxml"));
        Scene scene = new Scene(root);

        loginStage.setTitle("CRUD - Login");
        loginStage.setResizable(false);
        loginStage.setScene(scene);
        loginStage.show();
        loginStage.centerOnScreen();

        /* new Thread(() -> {
            try {
                Thread.sleep(5000);
                Platform.runLater(() -> window.hide());
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }).start(); */
    }

    public void login() {
        // loginStatus.setText("");

        if (inputUser.getText().isEmpty() && inputPassword.getText().isEmpty()) {
            loginStatus.setText("Username & password need to be filled");
            loginStatus.setFill(Color.web("ff0000"));
        } else if (inputUser.getText().isEmpty() && !inputPassword.getText().isEmpty()) {
            loginStatus.setText("Username input can not be empty");
            loginStatus.setFill(Color.web("ff0000"));
        } else if (!inputUser.getText().isEmpty() && inputPassword.getText().isEmpty()) {
            loginStatus.setText("Password input can not be empty");
            loginStatus.setFill(Color.web("ff0000"));
        } else if (!inputUser.getText().isEmpty() && !inputPassword.getText().isEmpty()) {
            loginStatus.setText("Login Success");
            loginStatus.setFill(Color.web("00ff00"));
        } else {
            loginStatus.setText("Invalid credentials");
            loginStatus.setFill(Color.web("ff0000"));
        }
    }

    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void init() throws Exception {
        System.out.println("🟠 Application initialized !");
    }

    @Override
    public void stop() throws Exception {
        System.out.println("🔴 Application stopped !");
    }
}
