public with sharing class pdfPageControler {
    public String pdfText{get;set;}
    public pdfPageControler() {
        pdfText =String.escapeSingleQuotes(
            ApexPages.currentPage().getParameters().get('pdfText')
        );

    }
}
