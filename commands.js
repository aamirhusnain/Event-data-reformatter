!function(){"use strict";var o={69367:function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.reformatData=void 0,e.reformatData=function(){try{Excel.run((function(o){var e=o.workbook.worksheets.getActiveWorksheet(),_={"Donor Ref for S'Force":"Contact_1_TFN_ID_COPY__C","First Name/Org":"NPSP__CONTACT1_FIRSTNAME__C",Surname:"NPSP__CONTACT1_LASTNAME__C",D:"NPSP__DONATION_CAMPAIGN_NAME__C",E:"DONATION_PROJECT__C",F:"NPSP__DONATION_NAME__C","Paid? (Paid/Blank)":"NPSP__DONATION_STAGE__C","Payment Type for Salesforce":"Donation_Donation_Type__c",I:"Donation_Donation_Amount__c","Gift Aid":"Donation_Gift_Aid_Declaration__c",K:"NPSP__DONATION_AMOUNT__C","Payment Date":"NPSP__DONATION_DATE__C",M:"NPSP__DONATION_RECORD_TYPE_NAME__C","Company Name":"Organisation","Donation Donor":"Donation Donor"},t=e.getUsedRange().load("values");return o.sync().then((function(){var e=o.workbook.worksheets.add("Reformat");e.activate(),e.getRange("A1:O1").values=[Object.values(_)];for(var n=t.values,a=t.values[0][0],i=10;i<n.length;i+=10){var r=n.slice(i,i+10),N=2;r.forEach((function(o){for(var t=o,i=n[9],r=n[8],c=t[1],O=t[19],s=parseInt(O),f=new Date(86400*(s-25569)*1e3),A=f.getDate()+"/"+(f.getMonth()+1)+"/"+f.getFullYear(),P=6;P<14;P++)if(t[P]){var D=[];for(var T in _){var u=i.indexOf(T);D[Object.values(_).indexOf(_[T])]="DONATION_PROJECT__C"===_[T]?r[P]:"NPSP__DONATION_CAMPAIGN_NAME__C"===_[T]?a:"NPSP__DONATION_NAME__C"===_[T]?c+" - Donation to "+i[P]+" - "+A:"Donation_Donation_Amount__c"===_[T]||"NPSP__DONATION_AMOUNT__C"===_[T]?t[P]:"NPSP__DONATION_RECORD_TYPE_NAME__C"===_[T]?"Project Donation":"NPSP__DONATION_DATE__C"===_[T]?A:t[u]}e.getRange("A"+N+":O"+N).values=[D],N++}}))}e.getUsedRange().format.autofitColumns()})).catch((function(o){console.log(o)}))}))}catch(o){console.log(o)}}}},e={};function _(t){var n=e[t];if(void 0!==n)return n.exports;var a=e[t]={exports:{}};return o[t](a,a.exports,_),a.exports}_(69367),Office.onReady((function(){})),Office.actions.associate("action",(function(o){var e={type:Office.MailboxEnums.ItemNotificationMessageType.InformationalMessage,message:"Performed action.",icon:"Icon.80x80",persistent:!0};Office.context.mailbox.item.notificationMessages.replaceAsync("ActionPerformanceNotification",e),o.completed()}))}();
//# sourceMappingURL=commands.js.map