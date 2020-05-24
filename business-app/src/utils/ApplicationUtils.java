package utils;

public class ApplicationUtils {

    public static String pluralize(int count, String singular, String plural) {
        String correctString = count == 1 ? singular : plural;
        return String.format("%d %s", count, correctString);
    }

    public static String pluralize(int count, String singular) {
        String plural = String.format("%s%s", singular, "s");
        return pluralize(count, singular, plural);
    }
}
