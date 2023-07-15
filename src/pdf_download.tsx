import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
  PDFViewer,
} from "@react-pdf/renderer";

const PdfGenerator = () => {
  const PDFDocument = () => {
    const styles = StyleSheet.create({
      page: {
        flexDirection: "row",
        backgroundColor: "#E4E4E4",
      },
      section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
      },
    });

    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Section #1</Text>
          </View>
          <View style={styles.section}>
            <Text>Section #2</Text>
          </View>
        </Page>
      </Document>
    );
  };

  return (
    <div>
      <div>
        <PDFViewer>
          <PDFDocument />
        </PDFViewer>
      </div>
      <div>
        <PDFDownloadLink
          document={<PDFDocument />}
          fileName="document.pdf"
          className="text-red-600"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download PDF"
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default PdfGenerator;
