//შექმენით ფუნქცია: "გადავიდეთ თუ არა ტესტში"
//ფუნქციას გადაეცით შეფასებები და დამწერები. ტესტის ჩაბარება მოხდება თუ ერთ-ერთი მათგანი აკმაყოფილებს მოთხოვნებს.
function goToTextOrNot(ratings, writers) {
    for (let i = 0; i < ratings.length; i++) {
      if (ratings[i] >= 50 || writers[i] === "done") {
        return true; 
      }
    }
    return false;  
  }
  
  const ratings = [40, 60, 25];
  const writers = ["Unverified", "done", "Unverified"];
  
  console.log(goToTextOrNot(ratings, writers)); 

  //შექმენით ფუნქცია: "შეგვიძლია თუ არა გასვლა გარეთ"
  //საჭიროა ამინდი იყოს კარგი ან დრო საკმარისი იყოს, და ჩვენ მზად ვიყოთ გასასვლელად.
  function canWeGoOutside(weatherIsGood, haveEnoughTime, Ready) {
    return Ready && (weatherIsGood || haveEnoughTime);
}
console.log(canWeGoOutside(true, false, true));  // true (good weather, not enough time, ready)
console.log(canWeGoOutside(false, true, true));  // true (bad weather, enough time, ready)
console.log(canWeGoOutside(false, false, true)); // false (bad weather, not enough time, ready)
console.log(canWeGoOutside(true, true, false));  // false (good weather, enough time, not ready)

//შექმენით ფუნქცია: "გადავდგათ თუ არა ნაბიჯი"
//საჭიროა ბარიერი არ იყოს და წასასვლელი სივრცე ხელმისაწვდომი იყოს, ან მეორე მხარეს სიგნალი მოდიოდეს
function stepOrNot(noBarrier, thereIsSpace, signalFromOtherSide,){
    return  (noBarrier && thereIsSpace) || signalFromOtherSide;
}
console.log(stepOrNot(true,false,true));
console.log(stepOrNot(false,false,true));
console.log(stepOrNot(true,true,false));
console.log(stepOrNot(true,false,false));

//შექმენით ფუნქცია: "უნდა ავიღოთ თუ არა ნივთი"
//საჭიროა ნივთი ხელმისაწვდომი იყოს და მისი წაღება დასაშვები იყოს, ან სხვა ადამიანს არ სურდეს მისი გამოყენება
function takeObjectOrNot(isAvailable, YouCanTake, NoOneWantsIt){
    return  (isAvailable && YouCanTake) || NoOneWantsIt;
}
console.log(takeObjectOrNot(true,false,true));
console.log(takeObjectOrNot(false,false,true));
console.log(takeObjectOrNot(true,true,false));
console.log(takeObjectOrNot(true,false,false));

//შექმენით ფუნქცია: "უნდა გავიხსენოთ თუ არა ინფორმაცია"
//საჭიროა დავალება იყოს აქტუალური ან ინფორმაცია ჯერ კიდევ საჭირო იყოს, და დრო გვქონდეს მის დასამუშავებლად.
function needToRecallInformation(isTaskRelevant, isInformationNeeded, haveTimeToProcess) {
    return (isTaskRelevant || isInformationNeeded) && haveTimeToProcess;
}
console.log(needToRecallInformation(true, false, true));    // true (relevant task, info not needed, have time)
console.log(needToRecallInformation(false, true, true));    // true (task not relevant, info needed, have time)
console.log(needToRecallInformation(true, true, false));    // false (relevant task, info needed, no time)
console.log(needToRecallInformation(true, false, false));   // false (relevant task, info not needed, no time)
console.log(needToRecallInformation(false, false, true));   // false (task not relevant, info not needed, have time)

//შექმენით ფუნქცია: "უნდა დავიძინოთ თუ არა"
//საჭიროა დრო იყოს გვიანი და ადამიანი დაღლილი იყოს, ან მეორე დღეს ადრიანად ადგომა საჭირო იყოს და შუქი გამორთული იყოს.
function shouldSleep(isLate, isTired, isEarlyTomorrow, areLightsOff) {
  return (isLate && isTired) || (isEarlyTomorrow && areLightsOff);
}
console.log(shouldSleep(true, true, false, false));     
console.log(shouldSleep(false, false, true, true));     
console.log(shouldSleep(true, false, false, false));    
console.log(shouldSleep(false, false, true, false));    
console.log(shouldSleep(false, false, false, false));

//შექმენით ფუნქცია: "უნდა წავიდეთ თუ არა წვეულებაზე"
//საჭიროა მეგობრები თანახმა იყვნენ წასვლაზე და მეორე დღეს სამუშაო არ იყოს, ან წვეულება ახლოს ტარდებოდეს.
function shouldGoToParty(friendsAgreed, noWorkTomorrow, isPartyNearby) {
  return (friendsAgreed && noWorkTomorrow) || isPartyNearby;
}
console.log(shouldGoToParty(true, true, false));   
console.log(shouldGoToParty(false, false, true));   
console.log(shouldGoToParty(true, false, false));   
console.log(shouldGoToParty(false, true, false));   
 
//შექმენით ფუნქცია: "უნდა დავრჩეთ თუ არა სახლში"
//საჭიროა ამინდი იყოს წვიმიანი ან თოვლიანი, და გეგმები არ არსებობდეს, რომელიც გარეთ გასვლას საჭიროებს.
function shouldStayHome(isRainy, isSnowy, OutdoorPlans) {
  return (isRainy || isSnowy) && OutdoorPlans;
}
console.log(shouldStayHome(true, false, false));    
console.log(shouldStayHome(false, true, false));    
console.log(shouldStayHome(true, true, false));     
console.log(shouldStayHome(true, false, true));     
console.log(shouldStayHome(false, false, false));   

//შექმენით ფუნქცია: "უნდა გავიდეთ სირბილზე თუ არა"
//საჭიროა ამინდი იყოს მშრალი და სპორტული ფეხსაცმელი ხელმისაწვდომი იყოს, ან მეგობარი მზად იყოს სირბილისთვის.
function shouldGoForRun(isDryWeather, hasSneakers, friendReadyToRun) {
  return (isDryWeather && hasSneakers) || friendReadyToRun;
}
console.log(shouldGoForRun(true, true, false));    
console.log(shouldGoForRun(false, false, true));   
console.log(shouldGoForRun(true, false, false));   
console.log(shouldGoForRun(false, true, false));   
console.log(shouldGoForRun(false, false, false));  

//შექმენით ფუნქცია: "უნდა ვუყუროთ თუ არა ფეხბურთს"
//საჭიროა დღე იყოს შაბათი ან კვირა და სხვა საქმეები არ გვქონდეს, ან თამაში ჩვენი საყვარელი გუნდის იყოს. 
function shouldWatchFootballOrNot(theDayIsSaturday, theDayIsSunday, gameOfOurFavouriteGroup){
  return (theDayIsSaturday && theDayIsSunday) || gameOfOurFavouriteGroup;
}
console.log(shouldWatchFootballOrNot(true, true, false));    
console.log(shouldWatchFootballOrNot(false, false, true));   
console.log(shouldWatchFootballOrNot(true, false, false));   
console.log(shouldWatchFootballOrNot(false, true, false));   
console.log(shouldWatchFootballOrNot(false, false, false)); 