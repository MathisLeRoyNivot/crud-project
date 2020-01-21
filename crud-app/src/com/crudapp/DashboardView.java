package com.crudapp;

import com.crudapp.tools.AppInfo;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

/**
 *
 */
public class DashboardView {

    private static JPanel dashBoardPanel = new JPanel();
    private static JToolBar dashboardToolBar = new JToolBar();
    private static JSplitPane dashboardSplitPane = new JSplitPane(JSplitPane.VERTICAL_SPLIT);

    private static JButton addButton = new JButton();
    private static JButton editButton = new JButton();
    private static JButton deleteButton = new JButton();

    private static JButton btn = new JButton();

    private static JFrame frame;

    /**
     *
     * @param args
     */
    public static void main(String[] args) {
        frame = new JFrame(AppInfo.APP_DASHBOARD_NAME);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(1280, 720);
        frame.setResizable(false);

        dashboardToolBar.setFloatable(false);

        addButton.setText("Add");
        dashboardToolBar.add(addButton);
        dashboardToolBar.addSeparator();

        editButton.setText("Edit");
        dashboardToolBar.add(editButton);
        dashboardToolBar.addSeparator();

        deleteButton.setText("Delete");
        dashboardToolBar.add(deleteButton);

        Container contentPane = frame.getContentPane();
        contentPane.add(dashboardToolBar, BorderLayout.NORTH);
        JTextArea textArea = new JTextArea();
        JScrollPane pane = new JScrollPane(textArea);
        contentPane.add(pane, BorderLayout.CENTER);

        // placeComponents(dashBoardPanel);
        frame.setVisible(true);

        /*frame.add(dashBoardPanel);
        placeComponents(dashBoardPanel);
        frame.setVisible(true);

        DashboardView.ActionHandler actionHandler = new DashboardView.ActionHandler();
        btn.addActionListener(actionHandler);*/
    }

    /**
     *
     * @param panel
     */
    private static void placeComponents(JPanel panel) {

        panel.setLayout(null);

        // Toolbar
        // addButton.setEnabled(false);
        addButton.setText("Add");

        // editButton.setEnabled(false);
        editButton.setText("Edit");

        panel.add(dashboardToolBar);


        // Splitpane
        dashboardSplitPane.setContinuousLayout(true);
        dashboardSplitPane.setOneTouchExpandable(true);


        // Username
        /*username_label.setText("Username");
        username_label.setBounds(10, 10, 80, 25);
        panel.add(username_label);

        username_field.setBounds(95, 10, 195, 25);
        username_label.setLabelFor(username_field);
        panel.add(username_field);

        username_error_msg.setText("");
        username_error_msg.setFont(new Font("Consolas", Font.ITALIC, 10));
        username_error_msg.setForeground(Color.RED);
        username_error_msg.setBounds(100, 40, 195, 15);
        panel.add(username_error_msg);

        // Password
        password_label.setText("Password");
        password_label.setBounds(10, 70, 80, 25);
        panel.add(password_label);

        password_field.setBounds(95, 70, 195, 25);
        password_label.setLabelFor(password_field);
        panel.add(password_field);

        password_error_msg.setText("");
        password_error_msg.setFont(new Font("Consolas", Font.ITALIC, 10));
        password_error_msg.setForeground(Color.RED);
        password_error_msg.setBounds(100, 100, 195, 15);
        panel.add(password_error_msg);*/

        // Login
        // btn.setText("Dashboard");
        // btn.setBounds(0, 0, 100, 25);
        // panel.add(btn);
    }

    /**
     *
     */
    private static class ActionHandler implements ActionListener {

        @Override
        public void actionPerformed(ActionEvent e) {

        }
    }
}
