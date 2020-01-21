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

        // Add button
        addButton.setEnabled(false);
        addButton.setCursor(new Cursor(Cursor.HAND_CURSOR));
        addButton.setText("Add");
        addButton.setToolTipText("Add");
        addButton.setIcon(new ImageIcon(new ImageIcon("icons/add.png").getImage().getScaledInstance(20, 20, Image.SCALE_SMOOTH)));
        dashboardToolBar.add(addButton);
        dashboardToolBar.addSeparator();

        // Edit button
        editButton.setEnabled(false);
        editButton.setCursor(new Cursor(Cursor.HAND_CURSOR));
        editButton.setText("Edit");
        editButton.setToolTipText("Edit");
        editButton.setIcon(new ImageIcon(new ImageIcon("icons/edit.png").getImage().getScaledInstance(20, 20, Image.SCALE_SMOOTH)));
        dashboardToolBar.add(editButton);
        dashboardToolBar.addSeparator();

        // Delete button
        deleteButton.setEnabled(false);
        deleteButton.setCursor(new Cursor(Cursor.HAND_CURSOR));
        deleteButton.setText("Delete");
        deleteButton.setToolTipText("Delete");
        deleteButton.setIcon(new ImageIcon(new ImageIcon("icons/delete.png").getImage().getScaledInstance(20, 20, Image.SCALE_SMOOTH)));
        dashboardToolBar.add(deleteButton);

        Container contentPane = frame.getContentPane();
        contentPane.add(dashboardToolBar, BorderLayout.NORTH);
        JTextArea textArea = new JTextArea();
        JScrollPane pane = new JScrollPane(textArea);
        contentPane.add(pane, BorderLayout.CENTER);

        frame.setVisible(true);

        DashboardView.ActionHandler actionHandler = new DashboardView.ActionHandler();
        addButton.addActionListener(actionHandler);
        editButton.addActionListener(actionHandler);
        deleteButton.addActionListener(actionHandler);
    }

    /**
     *
     * @param panel
     */
    private static void placeComponents(JPanel panel) {

        panel.setLayout(null);

        // Splitpane
        dashboardSplitPane.setContinuousLayout(true);
        dashboardSplitPane.setOneTouchExpandable(true);
    }

    /**
     *
     */
    private static class ActionHandler implements ActionListener {

        @Override
        public void actionPerformed(ActionEvent e) {
            JButton source = (JButton) e.getSource();

            if (source == addButton) {
                System.out.println("Add button pressed");
            }

            if (source == editButton) {
                System.out.println("Edit button pressed");
            }

            if (source == deleteButton) {
                System.out.println("Delete button pressed");
            }

        }
    }
}
