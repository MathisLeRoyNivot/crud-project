package login;

import javafx.event.ActionEvent;
import javafx.fxml.Initializable;
import javafx.scene.control.Label;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;
import javafx.scene.paint.Color;

import java.net.URL;
import java.util.ResourceBundle;
import java.util.concurrent.ExecutionException;

public class LoginController implements Initializable {

    public TextField UsernameInput;
    public Label UsernameInputError;
    public PasswordField PasswordInput;
    public Label PasswordInputError;

    public void login(ActionEvent event) {
        resetInputs();

        if (UsernameInput.getText().isEmpty() && PasswordInput.getText().isEmpty()) {
            UsernameInputError.setText("Username can not be empty");
            PasswordInputError.setText("Password can not be empty");
        } else if (UsernameInput.getText().isEmpty() && !PasswordInput.getText().isEmpty()) {
            UsernameInputError.setText("Username can not be empty");
        } else if (!UsernameInput.getText().isEmpty() && PasswordInput.getText().isEmpty()) {
            PasswordInputError.setText("Password can not be empty");
        } else if (!UsernameInput.getText().isEmpty() && !PasswordInput.getText().isEmpty()) {
            try {
                loginAuth(UsernameInput.getText(), PasswordInput.getText());
            } catch (Exception e) {
                System.out.println(e.getMessage());
            }
        }
    }

    private void resetInputs() {
        UsernameInputError.setText("");
        PasswordInputError.setText("");
    }

    private void loginAuth(String username, String password) {
        System.out.println("Login success");
        System.out.println(String.format("Username : %s, Password : %s", username, password));
    }

    public void quitApplication(ActionEvent event) {
        System.out.println("Quit");
    }

    @Override
    public void initialize(URL url, ResourceBundle resourceBundle) {

    }

}
