public with sharing class AccountControler {
    @AuraEnabled(cacheable=true)
public static List<Account> getAccountList(){
    return [SELECT id, Name, Type, Industry from Account LIMIT 5];
}
}
