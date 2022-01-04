public with sharing class pdfControler {
@AuraEnabled
    public static Attachment generatePDF(Id recordId, String htmlData){
        pagereference page =page.renderAsPDF;
        page.getParameters().put('pdfText', htmlData);

        Contact con =new Contact(Id=recordId);
        Attachment objAttachment =new Attachment();
        objAttachment.Name = 'invoice.pdf';
        objAttachment.ParentId =con.Id;
        objAttachment.Body =page.getContentaspdf();
        objAttachment.IsPrivate=false;
        insert objAttachment;
        return objAttachment;

    }
}
