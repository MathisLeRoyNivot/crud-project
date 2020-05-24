package dashboard;

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

public class Dashboard extends Application {

    @Override
    public void start(Stage dashboardStage) throws Exception {
        System.out.println("🟢 Dashboard view started !");

        Parent root = FXMLLoader.load(getClass().getResource("Dashboard.fxml"));
        Scene scene = new Scene(root);

        dashboardStage.setTitle("CRUD - Dashboard");
        dashboardStage.setScene(scene);
        dashboardStage.show();
        dashboardStage.centerOnScreen();
    }

    public static void main(String[] args) { launch(args); }
}
