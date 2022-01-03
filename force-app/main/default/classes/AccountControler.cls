public with sharing class AccountControler {
    @AuraEnabled(cacheable=true)
public static List<Account> getAccountList(){
    return [SELECT id, Name, Type, Industry from Account LIMIT 5];
}
    @AuraEnabled(cacheable=true)
public static List<Account> filterAccountByType(String type){
    return [SELECT id, Name, Type  from Account where Type=:type LIMIT 5];
}
@AuraEnabled(cacheable=true)
public static List<Account> findAccount(String searchKey){
    String key = '%'+searchKey+'%';
    return [SELECT id, Name, Type, industry from Account where Name LIKE :key LIMIT 5];
}

}
