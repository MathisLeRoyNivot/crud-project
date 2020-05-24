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

        window = loginStage;
        window.setTitle("Login");
        window.setResizable(false);

        GridPane grid = new GridPane();
        grid.setAlignment(Pos.CENTER);
        grid.setVgap(20);
        grid.setHgap(20);
        grid.setPadding(new Insets(20));

        Text loginTitle = new Text("C.R.U.D Login");
        loginTitle.setFont(Font.font("Tahoma", FontWeight.BOLD, 25));
        grid.add(loginTitle, 0, 0);

        loginStatus = new Text();
        grid.add(loginStatus, 1, 4);

        Label labelInputUser = new Label("Username");
        grid.add(labelInputUser, 0, 1);

        inputUser = new TextField();
        inputUser.setPromptText("Username");
        grid.add(inputUser, 1, 1);

        Label labelInputPassword = new Label("Password");
        grid.add(labelInputPassword, 0, 2);

        inputPassword = new PasswordField();
        inputPassword.setPromptText("Password");
        grid.add(inputPassword, 1, 2);

        Button loginBtn = new Button("Login");
        grid.add(loginBtn, 1, 3);
        loginBtn.setOnAction(e -> login());

        window.setScene(new Scene(grid, 600, 300));
        window.show();
        window.centerOnScreen();

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
