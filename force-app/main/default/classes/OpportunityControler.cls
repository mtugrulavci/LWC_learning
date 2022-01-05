 public with sharing class OpportunityControler {
   @AuraEnabled(cacheable=true)
   public static List<Opportunity> getOpportunities(){
    return [SELECT stageName FROM Opportunity];
   }

}
