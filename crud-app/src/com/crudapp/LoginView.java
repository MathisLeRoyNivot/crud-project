package com.crudapp;

import com.crudapp.tools.AppInfo;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

/**
 *
 */
public class LoginView {

    private static JPanel loginPanel = new JPanel();
    private static JLabel login_username_label = new JLabel();
    private static JTextField login_username_field = new JTextField();
    private static JLabel username_error_msg = new JLabel();
    private static JLabel login_password_label = new JLabel();
    private static JPasswordField login_password_field = new JPasswordField();
    private static JLabel password_error_msg = new JLabel();
    private static JButton login_btn = new JButton();

    /**
     *
     * @param args
     */
    public static void main(String[] args) {
        JFrame frame = new JFrame(AppInfo.APP_LOGIN_NAME);
        frame.setSize(300, 180);
        frame.setResizable(false);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.add(loginPanel);
        placeComponents(loginPanel);
        frame.setVisible(true);

        ActionHandler actionHandler = new ActionHandler();
        login_btn.addActionListener(actionHandler);
    }

    /**
     *
     * @param panel
     */
    private static void placeComponents(JPanel panel) {

        panel.setLayout(null);

        // Username
        login_username_label.setText("Username");
        login_username_label.setBounds(10, 10, 80, 25);
        panel.add(login_username_label);

        login_username_field.setBounds(95, 10, 195, 25);
        login_username_label.setLabelFor(login_username_field);
        panel.add(login_username_field);

        username_error_msg.setText("");
        username_error_msg.setFont(new Font("Consolas", Font.ITALIC, 10));
        username_error_msg.setForeground(Color.RED);
        username_error_msg.setBounds(100, 40, 195, 15);
        panel.add(username_error_msg);

        // Password
        login_password_label.setText("Password");
        login_password_label.setBounds(10, 70, 80, 25);
        panel.add(login_password_label);

        login_password_field.setBounds(95, 70, 195, 25);
        login_password_label.setLabelFor(login_password_field);
        panel.add(login_password_field);

        password_error_msg.setText("");
        password_error_msg.setFont(new Font("Consolas", Font.ITALIC, 10));
        password_error_msg.setForeground(Color.RED);
        password_error_msg.setBounds(100, 100, 195, 15);
        panel.add(password_error_msg);

        // Login
        login_btn.setText("Login");
        login_btn.setBounds(195, 125, 100, 25);
        panel.add(login_btn);
    }

    /**
     *
     */
    private static class ActionHandler implements ActionListener {

        @Override
        public void actionPerformed(ActionEvent e) {
            String username = login_username_field.getText();
            String password = login_password_field.getText();

            if (e.getSource() == login_btn) {
                if (username.isEmpty() && password.isEmpty()) {
                    username_error_msg.setText("Please enter an username");
                    password_error_msg.setText("Please enter a password");
                } else if (username.isEmpty()) {
                    username_error_msg.setText("Please enter an username");
                } else if (password.isEmpty()) {
                    password_error_msg.setText("Please enter a password");
                } else {
                    username_error_msg.setText(null);
                    password_error_msg.setText(null);
                    JOptionPane.showMessageDialog(null, String.format("Username : %s | Password : %s", username, password));
                }
            }
        }
    }
}
