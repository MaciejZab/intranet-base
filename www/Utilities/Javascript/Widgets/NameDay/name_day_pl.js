var BrowserDetect = {
  init: function () {
    this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
    this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
    this.OS = this.searchString(this.dataOS) || "an unknown OS";
  },
  searchString: function (data) {
    for (var i = 0; i < data.length; i++) {
      var dataString = data[i].string;
      var dataProp = data[i].prop;
      this.versionSearchString = data[i].versionSearch || data[i].identity;
      if (dataString) {
        if (dataString.indexOf(data[i].subString) != -1) return data[i].identity;
      } else if (dataProp) return data[i].identity;
    }
  },
  searchVersion: function (dataString) {
    var index = dataString.indexOf(this.versionSearchString);
    if (index == -1) return;
    return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
  },
  dataBrowser: [
    { string: navigator.userAgent, subString: "OmniWeb", versionSearch: "OmniWeb/", identity: "OmniWeb" },
    {
      string: navigator.vendor,
      subString: "Apple",
      identity: "Safari",
    },
    {
      prop: window.opera,
      identity: "Opera",
    },
    {
      string: navigator.vendor,
      subString: "iCab",
      identity: "iCab",
    },
    {
      string: navigator.vendor,
      subString: "KDE",
      identity: "Konqueror",
    },
    {
      string: navigator.userAgent,
      subString: "Firefox",
      identity: "Firefox",
    },
    {
      string: navigator.vendor,
      subString: "Camino",
      identity: "Camino",
    },
    {
      // for newer Netscapes (6+)
      string: navigator.userAgent,
      subString: "Netscape",
      identity: "Netscape",
    },
    {
      string: navigator.userAgent,
      subString: "MSIE",
      identity: "Explorer",
      versionSearch: "MSIE",
    },
    {
      string: navigator.userAgent,
      subString: "Gecko",
      identity: "Mozilla",
      versionSearch: "rv",
    },
    {
      // for older Netscapes (4-)
      string: navigator.userAgent,
      subString: "Mozilla",
      identity: "Netscape",
      versionSearch: "Mozilla",
    },
  ],
  dataOS: [
    {
      string: navigator.platform,
      subString: "Win",
      identity: "Windows",
    },
    {
      string: navigator.platform,
      subString: "Mac",
      identity: "Mac",
    },
    {
      string: navigator.platform,
      subString: "Linux",
      identity: "Linux",
    },
  ],
};
BrowserDetect.init();

var browsertyp2 = BrowserDetect.browser;
if (browsertyp2 == "Explorer") {
  svatek = new Array();
  svatek["Jan 1 "] = "1. Mieszko, Mieczysław";
  svatek["Jan 2 "] = "2. Izydor, Grzegorz";
  svatek["Jan 3 "] = "3. Danuta, Zdzisław";
  svatek["Jan 4 "] = "4. Elżbieta, Aniela";
  svatek["Jan 5 "] = "5. Hanna, Edward, Szymon";
  svatek["Jan 6 "] = "6. Kacper, Melchior, Baltazar";
  svatek["Jan 7 "] = "7. Lucjan, Julian";
  svatek["Jan 8 "] = "8. Seweryn, Juliusz";
  svatek["Jan 9 "] = "9. Adrian, Marcelina";
  svatek["Jan 10"] = "10. Danuta, Wilhelm";
  svatek["Jan 11"] = "11. Honorata, Matylda";
  svatek["Jan 12"] = "12. Ada, Benedykt, Arkadiusz";
  svatek["Jan 13"] = "13. Bogumiła, Weronika";
  svatek["Jan 14"] = "14. Feliks, Nina";
  svatek["Jan 15"] = "15. Paweł, Arnold, Izydor";
  svatek["Jan 16"] = "16. Marcela, Włodzimierz";
  svatek["Jan 17"] = "17. Antoni, Jan";
  svatek["Jan 18"] = "18. Małgorzata, Piotr";
  svatek["Jan 19"] = "19. Henryk, Marta";
  svatek["Jan 20"] = "20. Fabian, Sebastian";
  svatek["Jan 21"] = "21. Agnieszka, Jarosław";
  svatek["Jan 22"] = "22. Anastazy, Wincenty";
  svatek["Jan 23"] = "23. Ildefons, Rajmund";
  svatek["Jan 24"] = "24. Rafał, Felicja, Franciszka";
  svatek["Jan 25"] = "25. Paweł, Miłosz";
  svatek["Jan 26"] = "26. Tymoteusz, Michał";
  svatek["Jan 27"] = "27. Aniela, Jerzy";
  svatek["Jan 28"] = "28. Walery, Karol";
  svatek["Jan 29"] = "29. Franciszek, Józef";
  svatek["Jan 30"] = "30. Maciej, Martyna";
  svatek["Jan 31"] = "31. Jan, Marcela, Ludwika";

  svatek["Feb 1 "] = "1. Brygida, Ignacy";
  svatek["Feb 2 "] = "2. Maria, Mirosław";
  svatek["Feb 3 "] = "3. Błażej, Oskar";
  svatek["Feb 4 "] = "4. Andrzej, Józef, Tytus";
  svatek["Feb 5 "] = "5. Agata, Adelajda";
  svatek["Feb 6 "] = "6. Dorota, Bogdan, Paweł";
  svatek["Feb 7 "] = "7. Ryszard, Teodor";
  svatek["Feb 8 "] = "8. Hieronim, Sebastian";
  svatek["Feb 9 "] = "9. Apolina, Eryka, Cyryl";
  svatek["Feb 10"] = "10. Elwira, Jacek";
  svatek["Feb 11"] = "11. Grzegorz, Lucjan";
  svatek["Feb 12"] = "12. Radosław, Damian";
  svatek["Feb 13"] = "13. Grzegorz, Katarzyna";
  svatek["Feb 14"] = "14. Cyryl, Metody";
  svatek["Feb 15"] = "15. Jowita, Faustyn";
  svatek["Feb 16"] = "16. Danuta, Julian";
  svatek["Feb 17"] = "17. Aleksy, Łukasz";
  svatek["Feb 18"] = "18. Szymon, Konstancja";
  svatek["Feb 19"] = "19. Arnold, Józef, Konrad";
  svatek["Feb 20"] = "20. Leon, Ludomir";
  svatek["Feb 21"] = "21. Robert, Eleonora";
  svatek["Feb 22"] = "22. Marta, Małgorzata";
  svatek["Feb 23"] = "23. Romana, Damian";
  svatek["Feb 24"] = "24. Maciej, Marek";
  svatek["Feb 25"] = "25. Cezary, Donat";
  svatek["Feb 26"] = "26. Mirosław, Aleksander";
  svatek["Feb 27"] = "27. Gabriel, Anastazja";
  svatek["Feb 28"] = "28. Roman, Ludomir";
  svatek["Feb 29"] = "29. ";

  svatek["Mar 1 "] = "1. Albin, Antoni";
  svatek["Mar 2 "] = "2. Helena, Halszka";
  svatek["Mar 3 "] = "3. Maryna, Kunegunda";
  svatek["Mar 4 "] = "4. Arkadiusz, Eugeniusz, Kazimierz";
  svatek["Mar 5 "] = "5. Adrian, Fryderyk";
  svatek["Mar 6 "] = "6. Róża, Wiktor";
  svatek["Mar 7 "] = "7. Tomasz, Felicyta";
  svatek["Mar 8 "] = "8. Beata, Wincenty";
  svatek["Mar 9 "] = "9. Franciszka, Dominika";
  svatek["Mar 10"] = "10. Cyprian, Aleksander";
  svatek["Mar 11"] = "11. Benedykt, Konstantyn";
  svatek["Mar 12"] = "12. Alojzy, Bernard";
  svatek["Mar 13"] = "13. Bożena, Krystyna";
  svatek["Mar 14"] = "14. Leon, Martyna";
  svatek["Mar 15"] = "15. Longin, Klemens";
  svatek["Mar 16"] = "16. Izabela, Oktawia";
  svatek["Mar 17"] = "17. Patryk, Zbigniew";
  svatek["Mar 18"] = "18. Cyryl, Edward";
  svatek["Mar 19"] = "19. Józef, Bogdan";
  svatek["Mar 20"] = "20. Klaudia, Eufemia";
  svatek["Mar 21"] = "21. Ludomir, Benedykt";
  svatek["Mar 22"] = "22. Katarzyna, Bogusław";
  svatek["Mar 23"] = "23. Pelagia, Feliks";
  svatek["Mar 24"] = "24. Marek, Gabriel";
  svatek["Mar 25"] = "25. Mariola, Wienczysław";
  svatek["Mar 26"] = "26. Emanuel, Larysa, Teodor";
  svatek["Mar 27"] = "27. Lidia, Ernest";
  svatek["Mar 28"] = "28. Aniela, Jan";
  svatek["Mar 29"] = "29. Wiktoryn, Helmut";
  svatek["Mar 30"] = "30. Aniela, Leonard";
  svatek["Mar 31"] = "31. Beniamin, Balbina";

  svatek["Apr 1 "] = "1. Grażyna, Irena";
  svatek["Apr 2 "] = "2. Wladysław, Franciszka";
  svatek["Apr 3 "] = "3. Ryszard, Irena";
  svatek["Apr 4 "] = "4. Benedykt, Izydor";
  svatek["Apr 5 "] = "5. Katarzyna, Wincenty";
  svatek["Apr 6 "] = "6. Izolda, Ireneusz";
  svatek["Apr 7 "] = "7. Rufin, Donat";
  svatek["Apr 8 "] = "8. Dionizy, Julia";
  svatek["Apr 9 "] = "9. Maria, Dymitr";
  svatek["Apr 10"] = "10. Michał, Makary";
  svatek["Apr 11"] = "11. Filip, Leon";
  svatek["Apr 12"] = "12. Damian, Juliusz";
  svatek["Apr 13"] = "13. Przemysław, Ida";
  svatek["Apr 14"] = "14. Berenika, Walerian";
  svatek["Apr 15"] = "15. Ludwina, Wacława";
  svatek["Apr 16"] = "16. Cecylian, Bernadeta";
  svatek["Apr 17"] = "17. Robert, Rudolf";
  svatek["Apr 18"] = "18. Alicja, Bogusław";
  svatek["Apr 19"] = "19. Adolf, Tymon";
  svatek["Apr 20"] = "20. Czesław, Agnieszka";
  svatek["Apr 21"] = "21. Bartosz, Feliks";
  svatek["Apr 22"] = "22. Kazimierz, Łukasz";
  svatek["Apr 23"] = "23. Jerzy, Wojciech, Idzi";
  svatek["Apr 24"] = "24. Aleksy, Horacy";
  svatek["Apr 25"] = "25. Marek, Jarosław";
  svatek["Apr 26"] = "26. Marzena, Maria, Klaudiusz";
  svatek["Apr 27"] = "27. Ludwik, Piotr";
  svatek["Apr 28"] = "28. Paweł, Waleria";
  svatek["Apr 29"] = "29. Rita, Donata";
  svatek["Apr 30"] = "30. Marian, Katarzyna";

  svatek["May 1 "] = "1. Józef, Jeremiasz";
  svatek["May 2 "] = "2. Zygmunt, Atanazy";
  svatek["May 3 "] = "3. Maria, Mariola";
  svatek["May 4 "] = "4. Monika, Florian";
  svatek["May 5 "] = "5. Irena, Waldemar";
  svatek["May 6 "] = "6. Filip, Judyta";
  svatek["May 7 "] = "7. Benedykt, Gizela";
  svatek["May 8 "] = "8. Ilza, Stanisław, Wiktor";
  svatek["May 9 "] = "9. Bożydar, Grzegorz";
  svatek["May 10"] = "10. Izydor, Antoniny";
  svatek["May 11"] = "11. Iga, Ignacy";
  svatek["May 12"] = "12. Joanna, Achilles";
  svatek["May 13"] = "13. Gloria, Gerwazy";
  svatek["May 14"] = "14. Bonifacy, Dobiesław";
  svatek["May 15"] = "15. Zofia, Nadzieja";
  svatek["May 16"] = "16. Andrzej, Jędrzej";
  svatek["May 17"] = "17. Brunon, Paschalis";
  svatek["May 18"] = "18. Eryk, Feliks";
  svatek["May 19"] = "19. Piotr, Iwa";
  svatek["May 20"] = "20. Aleksandr, Bazyli";
  svatek["May 21"] = "21. Jan, Wiktor";
  svatek["May 22"] = "22. Helena, Wiesław";
  svatek["May 23"] = "23. Emilia, Iwona";
  svatek["May 24"] = "24. Joanna, Zuzanna";
  svatek["May 25"] = "25. Borysław, Grzegorz";
  svatek["May 26"] = "26. Filip, Paulina";
  svatek["May 27"] = "27. Augustyn, Julian";
  svatek["May 28"] = "28. Jaromir, Justyna";
  svatek["May 29"] = "29. Magdalena, Bogumiła";
  svatek["May 30"] = "30. Karol, Ferdynand";
  svatek["May 31"] = "31. Aniela, Petronela";

  svatek["Jun 1 "] = "1. Jakub, Justyn";
  svatek["Jun 2 "] = "2. Erazm, Marianna";
  svatek["Jun 3 "] = "3. Leszek, Tamara";
  svatek["Jun 4 "] = "4. Franciszka, Karol";
  svatek["Jun 5 "] = "5. Bonifacy, Walter";
  svatek["Jun 6 "] = "6. Norbert, Laurenty";
  svatek["Jun 7 "] = "7. Robert, Wiesław";
  svatek["Jun 8 "] = "8. Maksym, Medard";
  svatek["Jun 9 "] = "9. Anna, Felicjan";
  svatek["Jun 10"] = "10. Bogumił, Malgorzata";
  svatek["Jun 11"] = "11. Barnaba, Radomił";
  svatek["Jun 12"] = "12. Janina, Jan";
  svatek["Jun 13"] = "13. Lucjan, Antoni";
  svatek["Jun 14"] = "14. Bazyli, Eliza";
  svatek["Jun 15"] = "15. Wit, Jolanta";
  svatek["Jun 16"] = "16. Alina, Benon";
  svatek["Jun 17"] = "17. Albert, Ignacy";
  svatek["Jun 18"] = "18. Mark, Elzbieta";
  svatek["Jun 19"] = "19. Gerwazy, Protazy";
  svatek["Jun 20"] = "20. Dina, Bogna";
  svatek["Jun 21"] = "21. Alicja, Alojzy";
  svatek["Jun 22"] = "22. Paulina, Tomasz";
  svatek["Jun 23"] = "23. Wanda, Zenon";
  svatek["Jun 24"] = "24. Jan, Danuta";
  svatek["Jun 25"] = "25. Lucja, Wilhelm";
  svatek["Jun 26"] = "26. Jan, Paula";
  svatek["Jun 27"] = "27. Maryla, Wladysław";
  svatek["Jun 28"] = "28. Leon, Ireneusz";
  svatek["Jun 29"] = "29. Piotr, Paweł";
  svatek["Jun 30"] = "30. Emilia, Lucyca";

  svatek["Jul 1 "] = "1. Halina, Marian";
  svatek["Jul 2 "] = "2. Jagoda, Urban";
  svatek["Jul 3 "] = "3. Jack, Anatol";
  svatek["Jul 4 "] = "4. Malwina, Odon";
  svatek["Jul 5 "] = "5. Marii, Antoni";
  svatek["Jul 6 "] = "6. Dominika, Gotard";
  svatek["Jul 7 "] = "7. Benedykt, Cyryl";
  svatek["Jul 8 "] = "8. Adriana, Eugeniusz";
  svatek["Jul 9 "] = "9. Lukrecja, Weronika";
  svatek["Jul 10"] = "10. Olaf, Witalis";
  svatek["Jul 11"] = "11. Olga, Kalina";
  svatek["Jul 12"] = "12. Jan, Brunon";
  svatek["Jul 13"] = "13. Ernest, Malgorzata";
  svatek["Jul 14"] = "14. Bonawentura, Stelia";
  svatek["Jul 15"] = "15. Dawid, Henryk";
  svatek["Jul 16"] = "16. Eustachy, Maria";
  svatek["Jul 17"] = "17. Aneta, Bogdan";
  svatek["Jul 18"] = "18. Emil, Erwin";
  svatek["Jul 19"] = "19. Wincenty, Wodzisław";
  svatek["Jul 20"] = "20. Czesław, Fryderyk";
  svatek["Jul 21"] = "21. Daniel, Dalida";
  svatek["Jul 22"] = "22. Maria, Magdalena";
  svatek["Jul 23"] = "23. Bogna, Apolinary";
  svatek["Jul 24"] = "24. Kinga, Krystyna";
  svatek["Jul 25"] = "25. Walentyna, Krzysztof";
  svatek["Jul 26"] = "26. Anna, Mirosława";
  svatek["Jul 27"] = "27. Celestyn, Lilia";
  svatek["Jul 28"] = "28. Aida, Innocenty";
  svatek["Jul 29"] = "29. Olaf, Marta";
  svatek["Jul 30"] = "30. Julita, Piotr";
  svatek["Jul 31"] = "31. Ignacy, Lubomir";

  svatek["Aug 1 "] = "1. Alfons, Nadia";
  svatek["Aug 2 "] = "2. Karina, Gustaw";
  svatek["Aug 3 "] = "3. Lidia, August";
  svatek["Aug 4 "] = "4. Dominik, Jan";
  svatek["Aug 5 "] = "5. Maria, Oswald";
  svatek["Aug 6 "] = "6. Sława, Jakub";
  svatek["Aug 7 "] = "7. Klaudia, Kajetan";
  svatek["Aug 8 "] = "8. Cyprian, Dominik";
  svatek["Aug 9 "] = "9. Roman, Ryszard";
  svatek["Aug 10"] = "10. Bogdan, Borys";
  svatek["Aug 11"] = "11. Klara, Lidia";
  svatek["Aug 12"] = "12. Lech, Euzebia";
  svatek["Aug 13"] = "13. Diana, Hipolit";
  svatek["Aug 14"] = "14. Alfred, Euzebiusz";
  svatek["Aug 15"] = "15. Maria, Napoleon";
  svatek["Aug 16"] = "16. Stefan, Roch";
  svatek["Aug 17"] = "17. Anita, Eliza";
  svatek["Aug 18"] = "18. Ilona, Klara";
  svatek["Aug 19"] = "19. Jan, Bolesław";
  svatek["Aug 20"] = "20. Bernard, Samuel";
  svatek["Aug 21"] = "21. Franciszka, Joanna";
  svatek["Aug 22"] = "22. Maria, Cezary";
  svatek["Aug 23"] = "23. Róża, Apolinary";
  svatek["Aug 24"] = "24. Emilia, Jerzy";
  svatek["Aug 25"] = "25. Luiza, Ludwik";
  svatek["Aug 26"] = "26. Maria, Zefiryna";
  svatek["Aug 27"] = "27. Monika, Cezary";
  svatek["Aug 28"] = "28. Patrycja, Wyszomir";
  svatek["Aug 29"] = "29. Beata, Jan";
  svatek["Aug 30"] = "30. Rebeka, Szczęsna";
  svatek["Aug 31"] = "31. Izabela, Ramona";

  svatek["Sep 1 "] = "1. Bronisława, Idzi";
  svatek["Sep 2 "] = "2. Julian, Stefan";
  svatek["Sep 3 "] = "3. Izabela, Szymon";
  svatek["Sep 4 "] = "4. Ida, Lilianna";
  svatek["Sep 5 "] = "5. Dorota, Wawrzyniec";
  svatek["Sep 6 "] = "6. Beata, Eugeniusz";
  svatek["Sep 7 "] = "7. Regina, Melchior";
  svatek["Sep 8 "] = "8. Maria, Adriana";
  svatek["Sep 9 "] = "9. Piotr, Sergiusz";
  svatek["Sep 10"] = "10. Łukasz, Mikołaj";
  svatek["Sep 11"] = "11. Jacek, Dagna";
  svatek["Sep 12"] = "12. Radzimir, Gwidon";
  svatek["Sep 13"] = "13. Eugenia, Aureliusz";
  svatek["Sep 14"] = "14. Roksana, Bernard";
  svatek["Sep 15"] = "15. Albin, Nikodem";
  svatek["Sep 16"] = "16. Edyta, Kornel";
  svatek["Sep 17"] = "17. Franciszka, Hildegarda";
  svatek["Sep 18"] = "18. Irma, Józef";
  svatek["Sep 19"] = "19. January, Konstancja";
  svatek["Sep 20"] = "20. Filipina, Eustachy";
  svatek["Sep 21"] = "21. Jonasz, Mateusz";
  svatek["Sep 22"] = "22. Tomasz, Maurycy";
  svatek["Sep 23"] = "23. Bogusław, Tekla";
  svatek["Sep 24"] = "24. Gerard, Teodor";
  svatek["Sep 25"] = "25. Aurelia, Ladysław";
  svatek["Sep 26"] = "26. Justyna, Cyprian";
  svatek["Sep 27"] = "27. Damian, Amadeusz";
  svatek["Sep 28"] = "28. Luba, Wacław";
  svatek["Sep 29"] = "29. Michał, Michalina";
  svatek["Sep 30"] = "30. Wera, Honoriusz";

  svatek["Oct 1 "] = "1. Danuta, Remigiusz";
  svatek["Oct 2 "] = "2. Teofil, Dionizja";
  svatek["Oct 3 "] = "3. Teresa, Heliodor";
  svatek["Oct 4 "] = "4. Rozalia, Edwin";
  svatek["Oct 5 "] = "5. Igor, Flawia";
  svatek["Oct 6 "] = "6. Artur, Brunon";
  svatek["Oct 7 "] = "7. Maria, Marek";
  svatek["Oct 8 "] = "8. Pelagia, Brygida";
  svatek["Oct 9 "] = "9. Arnold, Dionizy";
  svatek["Oct 10"] = "10. Paulina, Franciszka";
  svatek["Oct 11"] = "11. Emil, Aldona";
  svatek["Oct 12"] = "12. Eustachy, Maksymilian";
  svatek["Oct 13"] = "13. Gerard, Edward";
  svatek["Oct 14"] = "14. Alan, Kalikst";
  svatek["Oct 15"] = "15. Teresa, Jadwiga";
  svatek["Oct 16"] = "16. Gaweł, Florentyna";
  svatek["Oct 17"] = "17. Małgorzata, Wiktor";
  svatek["Oct 18"] = "18. Juliusz, Łukasz";
  svatek["Oct 19"] = "19. Pelagia, Piotr";
  svatek["Oct 20"] = "20. Irena, Jan";
  svatek["Oct 21"] = "21. Urszula, Hilaria";
  svatek["Oct 22"] = "22. Filip, Kordula";
  svatek["Oct 23"] = "23. Marlena, Seweryn";
  svatek["Oct 24"] = "24. Rafał, Marcin";
  svatek["Oct 25"] = "25. Daria, Wilhelmina";
  svatek["Oct 26"] = "26. Lucjan, Ewaryst";
  svatek["Oct 27"] = "27. Iwona, Sabina";
  svatek["Oct 28"] = "28. Szymon, Tadeusz";
  svatek["Oct 29"] = "29. Euzebia, Wioletta";
  svatek["Oct 30"] = "30. Zenobia, Przemysław";
  svatek["Oct 31"] = "31. Urban, Saturnin";

  svatek["Nov 1 "] = "1. Julian, Łukasz";
  svatek["Nov 2 "] = "2. Bohdana, Tobiasz";
  svatek["Nov 3 "] = "3. Sylwia, Hubert";
  svatek["Nov 4 "] = "4. Karol, Olgierd";
  svatek["Nov 5 "] = "5. Elżbieta, Sławomir";
  svatek["Nov 6 "] = "6. Feliks, Leonard";
  svatek["Nov 7 "] = "7. Antoni, Zytomir";
  svatek["Nov 8 "] = "8. Sewer, Hadriana";
  svatek["Nov 9 "] = "9. Ursyn, Todor";
  svatek["Nov 10"] = "10. Lena, Ludomir";
  svatek["Nov 11"] = "11. Marcin, Bartłomiej";
  svatek["Nov 12"] = "12. Renata, Witold";
  svatek["Nov 13"] = "13. Mikołaj, Stanisław";
  svatek["Nov 14"] = "14. Roger, Serafina";
  svatek["Nov 15"] = "15. Albert, Leopold";
  svatek["Nov 16"] = "16. Gertruda, Edmund";
  svatek["Nov 17"] = "17. Grzegorz, Salomea";
  svatek["Nov 18"] = "18. Roman, Klaudyna";
  svatek["Nov 19"] = "19. Elżbieta, Seweryn";
  svatek["Nov 20"] = "20. Anatol, Sędzimir";
  svatek["Nov 21"] = "21. Janusz, Konrad";
  svatek["Nov 22"] = "22. Marek, Cecylia";
  svatek["Nov 23"] = "23. Adela, Klemens";
  svatek["Nov 24"] = "24. Flora, Emma";
  svatek["Nov 25"] = "25. Katarzyna, Erazm";
  svatek["Nov 26"] = "26. Delfina, Sylwester";
  svatek["Nov 27"] = "27. Walery, Wilgiusz";
  svatek["Nov 28"] = "28. Lesław, Zdzisław";
  svatek["Nov 29"] = "29. Błażej, Saturnin";
  svatek["Nov 30"] = "30. Maura, Andrzej";

  svatek["Dec 1 "] = "1. Natalia, Eligiusz";
  svatek["Dec 2 "] = "2. Balbina, Bibiana";
  svatek["Dec 3 "] = "3. Franciszka, Ksawery";
  svatek["Dec 4 "] = "4. Barbara, Krystian";
  svatek["Dec 5 "] = "5. Saba, Kryspin";
  svatek["Dec 6 "] = "6. Mikołaj, Jarema";
  svatek["Dec 7 "] = "7. Marcin, Ambroża";
  svatek["Dec 8 "] = "8. Maria, Świątożar";
  svatek["Dec 9 "] = "9. Wiesław, Leokadia";
  svatek["Dec 10"] = "10. Julia, Daniela";
  svatek["Dec 11"] = "11. Damazy, Waldemar";
  svatek["Dec 12"] = "12. Dagmara, Aleksandra";
  svatek["Dec 13"] = "13. Lucja, Otylia";
  svatek["Dec 14"] = "14. Alfred, Izydor";
  svatek["Dec 15"] = "15. Nina, Celina";
  svatek["Dec 16"] = "16. Albina, Zdzisław";
  svatek["Dec 17"] = "17. Olimpia, Łazarz";
  svatek["Dec 18"] = "18. Gracjan, Bogusław";
  svatek["Dec 19"] = "19. Gabriela, Dariusz";
  svatek["Dec 20"] = "20. Bogumiła, Dominika";
  svatek["Dec 21"] = "21. Tomasz, Tomisław";
  svatek["Dec 22"] = "22. Zenon, Honorata";
  svatek["Dec 23"] = "23. Wiktoria, Sławomira";
  svatek["Dec 24"] = "24. Adam, Ewa";
  svatek["Dec 25"] = "25. Anastazja, Eulalia";
  svatek["Dec 26"] = "26. Jana, Żaneta";
  svatek["Dec 27"] = "27. Teofila, Godzisław";
  svatek["Dec 28"] = "28. Jana, Maksym";
  svatek["Dec 29"] = "29. Dawid, Tomasz";
  svatek["Dec 30"] = "30. Irmina, Eugeniusz";
  svatek["Dec 31"] = "31. Melania, Sylwester";
} else {
  svatek = new Array();
  svatek["Jan 01"] = "1. Mieszko, Mieczysław";
  svatek["Jan 02"] = "2. Izydor, Grzegorz";
  svatek["Jan 03"] = "3. Danuta, Zdzisław";
  svatek["Jan 04"] = "4. Elżbieta, Aniela";
  svatek["Jan 05"] = "5. Hanna, Edward, Szymon";
  svatek["Jan 06"] = "6. Kacper, Melchior, Baltazar";
  svatek["Jan 07"] = "7. Lucjan, Julian";
  svatek["Jan 08"] = "8. Seweryn, Juliusz";
  svatek["Jan 09"] = "9. Adrian, Marcelina";
  svatek["Jan 10"] = "10. Danuta, Wilhelm";
  svatek["Jan 11"] = "11. Honorata, Matylda";
  svatek["Jan 12"] = "12. Ada, Benedykt, Arkadiusz";
  svatek["Jan 13"] = "13. Bogumiła, Weronika";
  svatek["Jan 14"] = "14. Feliks, Nina";
  svatek["Jan 15"] = "15. Paweł, Arnold, Izydor";
  svatek["Jan 16"] = "16. Marcela, Włodzimierz";
  svatek["Jan 17"] = "17. Antoni, Jan";
  svatek["Jan 18"] = "18. Małgorzata, Piotr";
  svatek["Jan 19"] = "19. Henryk, Marta";
  svatek["Jan 20"] = "20. Fabian, Sebastian";
  svatek["Jan 21"] = "21. Agnieszka, Jarosław";
  svatek["Jan 22"] = "22. Anastazy, Wincenty";
  svatek["Jan 23"] = "23. Ildefons, Rajmund";
  svatek["Jan 24"] = "24. Rafał, Felicja, Franciszka";
  svatek["Jan 25"] = "25. Paweł, Miłosz";
  svatek["Jan 26"] = "26. Tymoteusz, Michał";
  svatek["Jan 27"] = "27. Aniela, Jerzy";
  svatek["Jan 28"] = "28. Walery, Karol";
  svatek["Jan 29"] = "29. Franciszek, Józef";
  svatek["Jan 30"] = "30. Maciej, Martyna";
  svatek["Jan 31"] = "31. Jan, Marcela, Ludwika";

  svatek["Feb 01"] = "1. Brygida, Ignacy";
  svatek["Feb 02"] = "2. Maria, Mirosław";
  svatek["Feb 03"] = "3. Błażej, Oskar";
  svatek["Feb 04"] = "4. Andrzej, Józef, Tytus";
  svatek["Feb 05"] = "5. Agata, Adelajda";
  svatek["Feb 06"] = "6. Dorota, Bogdan, Paweł";
  svatek["Feb 07"] = "7. Ryszard, Teodor";
  svatek["Feb 08"] = "8. Hieronim, Sebastian";
  svatek["Feb 09"] = "9. Apolina, Eryka, Cyryl";
  svatek["Feb 10"] = "10. Elwira, Jacek";
  svatek["Feb 11"] = "11. Grzegorz, Lucjan";
  svatek["Feb 12"] = "12. Radosław, Damian";
  svatek["Feb 13"] = "13. Grzegorz, Katarzyna";
  svatek["Feb 14"] = "14. Cyryl, Metody";
  svatek["Feb 15"] = "15. Jowita, Faustyn";
  svatek["Feb 16"] = "16. Danuta, Julian";
  svatek["Feb 17"] = "17. Aleksy, Łukasz";
  svatek["Feb 18"] = "18. Szymon, Konstancja";
  svatek["Feb 19"] = "19. Arnold, Józef, Konrad";
  svatek["Feb 20"] = "20. Leon, Ludomir";
  svatek["Feb 21"] = "21. Robert, Eleonora";
  svatek["Feb 22"] = "22. Marta, Małgorzata";
  svatek["Feb 23"] = "23. Romana, Damian";
  svatek["Feb 24"] = "24. Maciej, Marek";
  svatek["Feb 25"] = "25. Cezary, Donat";
  svatek["Feb 26"] = "26. Mirosław, Aleksander";
  svatek["Feb 27"] = "27. Gabriel, Anastazja";
  svatek["Feb 28"] = "28. Roman, Ludomir";
  svatek["Feb 29"] = "29. ";

  svatek["Mar 01"] = "1. Albin, Antoni";
  svatek["Mar 02"] = "2. Helena, Halszka";
  svatek["Mar 03"] = "3. Maryna, Kunegunda";
  svatek["Mar 04"] = "4. Arkadiusz, Eugeniusz, Kazimierz";
  svatek["Mar 05"] = "5. Adrian, Fryderyk";
  svatek["Mar 06"] = "6. Róża, Wiktor";
  svatek["Mar 07"] = "7. Tomasz, Felicyta";
  svatek["Mar 08"] = "8. Beata, Wincenty";
  svatek["Mar 09"] = "9. Franciszka, Dominika";
  svatek["Mar 10"] = "10. Cyprian, Aleksander";
  svatek["Mar 11"] = "11. Benedykt, Konstantyn";
  svatek["Mar 12"] = "12. Alojzy, Bernard";
  svatek["Mar 13"] = "13. Bożena, Krystyna";
  svatek["Mar 14"] = "14. Leon, Martyna";
  svatek["Mar 15"] = "15. Longin, Klemens";
  svatek["Mar 16"] = "16. Izabela, Oktawia";
  svatek["Mar 17"] = "17. Patryk, Zbigniew";
  svatek["Mar 18"] = "18. Cyryl, Edward";
  svatek["Mar 19"] = "19. Józef, Bogdan";
  svatek["Mar 20"] = "20. Klaudia, Eufemia";
  svatek["Mar 21"] = "21. Ludomir, Benedykt";
  svatek["Mar 22"] = "22. Katarzyna, Bogusław";
  svatek["Mar 23"] = "23. Pelagia, Feliks";
  svatek["Mar 24"] = "24. Marek, Gabriel";
  svatek["Mar 25"] = "25. Mariola, Wienczysław";
  svatek["Mar 26"] = "26. Emanuel, Larysa, Teodor";
  svatek["Mar 27"] = "27. Lidia, Ernest";
  svatek["Mar 28"] = "28. Aniela, Jan";
  svatek["Mar 29"] = "29. Wiktoryn, Helmut";
  svatek["Mar 30"] = "30. Aniela, Leonard";
  svatek["Mar 31"] = "31. Beniamin, Balbina";

  svatek["Apr 01"] = "1. Grażyna, Irena";
  svatek["Apr 02"] = "2. Wladysław, Franciszka";
  svatek["Apr 03"] = "3. Ryszard, Irena";
  svatek["Apr 04"] = "4. Benedykt, Izydor";
  svatek["Apr 05"] = "5. Katarzyna, Wincenty";
  svatek["Apr 06"] = "6. Izolda, Ireneusz";
  svatek["Apr 07"] = "7. Rufin, Donat";
  svatek["Apr 08"] = "8. Dionizy, Julia";
  svatek["Apr 09"] = "9. Maria, Dymitr";
  svatek["Apr 10"] = "10. Michał, Makary";
  svatek["Apr 11"] = "11. Filip, Leon";
  svatek["Apr 12"] = "12. Damian, Juliusz";
  svatek["Apr 13"] = "13. Przemysław, Ida";
  svatek["Apr 14"] = "14. Berenika, Walerian";
  svatek["Apr 15"] = "15. Ludwina, Wacława";
  svatek["Apr 16"] = "16. Cecylian, Bernadeta";
  svatek["Apr 17"] = "17. Robert, Rudolf";
  svatek["Apr 18"] = "18. Alicja, Bogusław";
  svatek["Apr 19"] = "19. Adolf, Tymon";
  svatek["Apr 20"] = "20. Czesław, Agnieszka";
  svatek["Apr 21"] = "21. Bartosz, Feliks";
  svatek["Apr 22"] = "22. Kazimierz, Łukasz";
  svatek["Apr 23"] = "23. Jerzy, Wojciech, Idzi";
  svatek["Apr 24"] = "24. Aleksy, Horacy";
  svatek["Apr 25"] = "25. Marek, Jarosław";
  svatek["Apr 26"] = "26. Marzena, Maria, Klaudiusz";
  svatek["Apr 27"] = "27. Ludwik, Piotr";
  svatek["Apr 28"] = "28. Paweł, Waleria";
  svatek["Apr 29"] = "29. Rita, Donata";
  svatek["Apr 30"] = "30. Marian, Katarzyna";

  svatek["May 01"] = "1. Józef, Jeremiasz";
  svatek["May 02"] = "2. Zygmunt, Atanazy";
  svatek["May 03"] = "3. Maria, Mariola";
  svatek["May 04"] = "4. Monika, Florian";
  svatek["May 05"] = "5. Irena, Waldemar";
  svatek["May 06"] = "6. Filip, Judyta";
  svatek["May 07"] = "7. Benedykt, Gizela";
  svatek["May 08"] = "8. Ilza, Stanisław, Wiktor";
  svatek["May 09"] = "9. Bożydar, Grzegorz";
  svatek["May 10"] = "10. Izydor, Antoniny";
  svatek["May 11"] = "11. Iga, Ignacy";
  svatek["May 12"] = "12. Joanna, Achilles";
  svatek["May 13"] = "13. Gloria, Gerwazy";
  svatek["May 14"] = "14. Bonifacy, Dobiesław";
  svatek["May 15"] = "15. Zofia, Nadzieja";
  svatek["May 16"] = "16. Andrzej, Jędrzej";
  svatek["May 17"] = "17. Brunon, Paschalis";
  svatek["May 18"] = "18. Eryk, Feliks";
  svatek["May 19"] = "19. Piotr, Iwa";
  svatek["May 20"] = "20. Aleksandr, Bazyli";
  svatek["May 21"] = "21. Jan, Wiktor";
  svatek["May 22"] = "22. Helena, Wiesław";
  svatek["May 23"] = "23. Emilia, Iwona";
  svatek["May 24"] = "24. Joanna, Zuzanna";
  svatek["May 25"] = "25. Borysław, Grzegorz";
  svatek["May 26"] = "26. Filip, Paulina";
  svatek["May 27"] = "27. Augustyn, Julian";
  svatek["May 28"] = "28. Jaromir, Justyna";
  svatek["May 29"] = "29. Magdalena, Bogumiła";
  svatek["May 30"] = "30. Karol, Ferdynand";
  svatek["May 31"] = "31. Aniela, Petronela";

  svatek["Jun 01"] = "1. Jakub, Justyn";
  svatek["Jun 02"] = "2. Erazm, Marianna";
  svatek["Jun 03"] = "3. Leszek, Tamara";
  svatek["Jun 04"] = "4. Franciszka, Karol";
  svatek["Jun 05"] = "5. Bonifacy, Walter";
  svatek["Jun 06"] = "6. Norbert, Laurenty";
  svatek["Jun 07"] = "7. Robert, Wiesław";
  svatek["Jun 08"] = "8. Maksym, Medard";
  svatek["Jun 09"] = "9. Anna, Felicjan";
  svatek["Jun 10"] = "10. Bogumił, Malgorzata";
  svatek["Jun 11"] = "11. Barnaba, Radomił";
  svatek["Jun 12"] = "12. Janina, Jan";
  svatek["Jun 13"] = "13. Lucjan, Antoni";
  svatek["Jun 14"] = "14. Bazyli, Eliza";
  svatek["Jun 15"] = "15. Wit, Jolanta";
  svatek["Jun 16"] = "16. Alina, Benon";
  svatek["Jun 17"] = "17. Albert, Ignacy";
  svatek["Jun 18"] = "18. Mark, Elzbieta";
  svatek["Jun 19"] = "19. Gerwazy, Protazy";
  svatek["Jun 20"] = "20. Dina, Bogna";
  svatek["Jun 21"] = "21. Alicja, Alojzy";
  svatek["Jun 22"] = "22. Paulina, Tomasz";
  svatek["Jun 23"] = "23. Wanda, Zenon";
  svatek["Jun 24"] = "24. Jan, Danuta";
  svatek["Jun 25"] = "25. Lucja, Wilhelm";
  svatek["Jun 26"] = "26. Jan, Paula";
  svatek["Jun 27"] = "27. Maryla, Wladysław";
  svatek["Jun 28"] = "28. Leon, Ireneusz";
  svatek["Jun 29"] = "29. Piotr, Paweł";
  svatek["Jun 30"] = "30. Emilia, Lucyca";

  svatek["Jul 01"] = "1. Halina, Marian";
  svatek["Jul 02"] = "2. Jagoda, Urban";
  svatek["Jul 03"] = "3. Jack, Anatol";
  svatek["Jul 04"] = "4. Malwina, Odon";
  svatek["Jul 05"] = "5. Marii, Antoni";
  svatek["Jul 06"] = "6. Dominika, Gotard";
  svatek["Jul 07"] = "7. Benedykt, Cyryl";
  svatek["Jul 08"] = "8. Adriana, Eugeniusz";
  svatek["Jul 09"] = "9. Lukrecja, Weronika";
  svatek["Jul 10"] = "10. Olaf, Witalis";
  svatek["Jul 11"] = "11. Olga, Kalina";
  svatek["Jul 12"] = "12. Jan, Brunon";
  svatek["Jul 13"] = "13. Ernest, Malgorzata";
  svatek["Jul 14"] = "14. Bonawentura, Stelia";
  svatek["Jul 15"] = "15. Dawid, Henryk";
  svatek["Jul 16"] = "16. Eustachy, Maria";
  svatek["Jul 17"] = "17. Aneta, Bogdan";
  svatek["Jul 18"] = "18. Emil, Erwin";
  svatek["Jul 19"] = "19. Wincenty, Wodzisław";
  svatek["Jul 20"] = "20. Czesław, Fryderyk";
  svatek["Jul 21"] = "21. Daniel, Dalida";
  svatek["Jul 22"] = "22. Maria, Magdalena";
  svatek["Jul 23"] = "23. Bogna, Apolinary";
  svatek["Jul 24"] = "24. Kinga, Krystyna";
  svatek["Jul 25"] = "25. Walentyna, Krzysztof";
  svatek["Jul 26"] = "26. Anna, Mirosława";
  svatek["Jul 27"] = "27. Celestyn, Lilia";
  svatek["Jul 28"] = "28. Aida, Innocenty";
  svatek["Jul 29"] = "29. Olaf, Marta";
  svatek["Jul 30"] = "30. Julita, Piotr";
  svatek["Jul 31"] = "31. Ignacy, Lubomir";

  svatek["Aug 01"] = "1. Alfons, Nadia";
  svatek["Aug 02"] = "2. Karina, Gustaw";
  svatek["Aug 03"] = "3. Lidia, August";
  svatek["Aug 04"] = "4. Dominik, Jan";
  svatek["Aug 05"] = "5. Maria, Oswald";
  svatek["Aug 06"] = "6. Sława, Jakub";
  svatek["Aug 07"] = "7. Klaudia, Kajetan";
  svatek["Aug 08"] = "8. Cyprian, Dominik";
  svatek["Aug 09"] = "9. Roman, Ryszard";
  svatek["Aug 10"] = "10. Bogdan, Borys";
  svatek["Aug 11"] = "11. Klara, Lidia";
  svatek["Aug 12"] = "12. Lech, Euzebia";
  svatek["Aug 13"] = "13. Diana, Hipolit";
  svatek["Aug 14"] = "14. Alfred, Euzebiusz";
  svatek["Aug 15"] = "15. Maria, Napoleon";
  svatek["Aug 16"] = "16. Stefan, Roch";
  svatek["Aug 17"] = "17. Anita, Eliza";
  svatek["Aug 18"] = "18. Ilona, Klara";
  svatek["Aug 19"] = "19. Jan, Bolesław";
  svatek["Aug 20"] = "20. Bernard, Samuel";
  svatek["Aug 21"] = "21. Franciszka, Joanna";
  svatek["Aug 22"] = "22. Maria, Cezary";
  svatek["Aug 23"] = "23. Róża, Apolinary";
  svatek["Aug 24"] = "24. Emilia, Jerzy";
  svatek["Aug 25"] = "25. Luiza, Ludwik";
  svatek["Aug 26"] = "26. Maria, Zefiryna";
  svatek["Aug 27"] = "27. Monika, Cezary";
  svatek["Aug 28"] = "28. Patrycja, Wyszomir";
  svatek["Aug 29"] = "29. Beata, Jan";
  svatek["Aug 30"] = "30. Rebeka, Szczęsna";
  svatek["Aug 31"] = "31. Izabela, Ramona";

  svatek["Sep 01"] = "1. Bronisława, Idzi";
  svatek["Sep 02"] = "2. Julian, Stefan";
  svatek["Sep 03"] = "3. Izabela, Szymon";
  svatek["Sep 04"] = "4. Ida, Lilianna";
  svatek["Sep 05"] = "5. Dorota, Wawrzyniec";
  svatek["Sep 06"] = "6. Beata, Eugeniusz";
  svatek["Sep 07"] = "7. Regina, Melchior";
  svatek["Sep 08"] = "8. Maria, Adriana";
  svatek["Sep 09"] = "9. Piotr, Sergiusz";
  svatek["Sep 10"] = "10. Łukasz, Mikołaj";
  svatek["Sep 11"] = "11. Jacek, Dagna";
  svatek["Sep 12"] = "12. Radzimir, Gwidon";
  svatek["Sep 13"] = "13. Eugenia, Aureliusz";
  svatek["Sep 14"] = "14. Roksana, Bernard";
  svatek["Sep 15"] = "15. Albin, Nikodem";
  svatek["Sep 16"] = "16. Edyta, Kornel";
  svatek["Sep 17"] = "17. Franciszka, Hildegarda";
  svatek["Sep 18"] = "18. Irma, Józef";
  svatek["Sep 19"] = "19. January, Konstancja";
  svatek["Sep 20"] = "20. Filipina, Eustachy";
  svatek["Sep 21"] = "21. Jonasz, Mateusz";
  svatek["Sep 22"] = "22. Tomasz, Maurycy";
  svatek["Sep 23"] = "23. Bogusław, Tekla";
  svatek["Sep 24"] = "24. Gerard, Teodor";
  svatek["Sep 25"] = "25. Aurelia, Ladysław";
  svatek["Sep 26"] = "26. Justyna, Cyprian";
  svatek["Sep 27"] = "27. Damian, Amadeusz";
  svatek["Sep 28"] = "28. Luba, Wacław";
  svatek["Sep 29"] = "29. Michał, Michalina";
  svatek["Sep 30"] = "30. Wera, Honoriusz";

  svatek["Oct 01"] = "1. Danuta, Remigiusz";
  svatek["Oct 02"] = "2. Teofil, Dionizja";
  svatek["Oct 03"] = "3. Teresa, Heliodor";
  svatek["Oct 04"] = "4. Rozalia, Edwin";
  svatek["Oct 05"] = "5. Igor, Flawia";
  svatek["Oct 06"] = "6. Artur, Brunon";
  svatek["Oct 07"] = "7. Maria, Marek";
  svatek["Oct 08"] = "8. Pelagia, Brygida";
  svatek["Oct 09"] = "9. Arnold, Dionizy";
  svatek["Oct 10"] = "10. Paulina, Franciszka";
  svatek["Oct 11"] = "11. Emil, Aldona";
  svatek["Oct 12"] = "12. Eustachy, Maksymilian";
  svatek["Oct 13"] = "13. Gerard, Edward";
  svatek["Oct 14"] = "14. Alan, Kalikst";
  svatek["Oct 15"] = "15. Teresa, Jadwiga";
  svatek["Oct 16"] = "16. Gaweł, Florentyna";
  svatek["Oct 17"] = "17. Małgorzata, Wiktor";
  svatek["Oct 18"] = "18. Juliusz, Łukasz";
  svatek["Oct 19"] = "19. Pelagia, Piotr";
  svatek["Oct 20"] = "20. Irena, Jan";
  svatek["Oct 21"] = "21. Urszula, Hilaria";
  svatek["Oct 22"] = "22. Filip, Kordula";
  svatek["Oct 23"] = "23. Marlena, Seweryn";
  svatek["Oct 24"] = "24. Rafał, Marcin";
  svatek["Oct 25"] = "25. Daria, Wilhelmina";
  svatek["Oct 26"] = "26. Lucjan, Ewaryst";
  svatek["Oct 27"] = "27. Iwona, Sabina";
  svatek["Oct 28"] = "28. Szymon, Tadeusz";
  svatek["Oct 29"] = "29. Euzebia, Wioletta";
  svatek["Oct 30"] = "30. Zenobia, Przemysław";
  svatek["Oct 31"] = "31. Urban, Saturnin";

  svatek["Nov 01"] = "1. Julian, Łukasz";
  svatek["Nov 02"] = "2. Bohdana, Tobiasz";
  svatek["Nov 03"] = "3. Sylwia, Hubert";
  svatek["Nov 04"] = "4. Karol, Olgierd";
  svatek["Nov 05"] = "5. Elżbieta, Sławomir";
  svatek["Nov 06"] = "6. Feliks, Leonard";
  svatek["Nov 07"] = "7. Antoni, Zytomir";
  svatek["Nov 08"] = "8. Sewer, Hadriana";
  svatek["Nov 09"] = "9. Ursyn, Todor";
  svatek["Nov 10"] = "10. Lena, Ludomir";
  svatek["Nov 11"] = "11. Marcin, Bartłomiej";
  svatek["Nov 12"] = "12. Renata, Witold";
  svatek["Nov 13"] = "13. Mikołaj, Stanisław";
  svatek["Nov 14"] = "14. Roger, Serafina";
  svatek["Nov 15"] = "15. Albert, Leopold";
  svatek["Nov 16"] = "16. Gertruda, Edmund";
  svatek["Nov 17"] = "17. Grzegorz, Salomea";
  svatek["Nov 18"] = "18. Roman, Klaudyna";
  svatek["Nov 19"] = "19. Elżbieta, Seweryn";
  svatek["Nov 20"] = "20. Anatol, Sędzimir";
  svatek["Nov 21"] = "21. Janusz, Konrad";
  svatek["Nov 22"] = "22. Marek, Cecylia";
  svatek["Nov 23"] = "23. Adela, Klemens";
  svatek["Nov 24"] = "24. Flora, Emma";
  svatek["Nov 25"] = "25. Katarzyna, Erazm";
  svatek["Nov 26"] = "26. Delfina, Sylwester";
  svatek["Nov 27"] = "27. Walery, Wilgiusz";
  svatek["Nov 28"] = "28. Lesław, Zdzisław";
  svatek["Nov 29"] = "29. Błażej, Saturnin";
  svatek["Nov 30"] = "30. Maura, Andrzej";

  svatek["Dec 01"] = "1. Natalia, Eligiusz";
  svatek["Dec 02"] = "2. Balbina, Bibiana";
  svatek["Dec 03"] = "3. Franciszka, Ksawery";
  svatek["Dec 04"] = "4. Barbara, Krystian";
  svatek["Dec 05"] = "5. Saba, Kryspin";
  svatek["Dec 06"] = "6. Mikołaj, Jarema";
  svatek["Dec 07"] = "7. Marcin, Ambroża";
  svatek["Dec 08"] = "8. Maria, Świątożar";
  svatek["Dec 09"] = "9. Wiesław, Leokadia";
  svatek["Dec 10"] = "10. Julia, Daniela";
  svatek["Dec 11"] = "11. Damazy, Waldemar";
  svatek["Dec 12"] = "12. Dagmara, Aleksandra";
  svatek["Dec 13"] = "13. Lucja, Otylia";
  svatek["Dec 14"] = "14. Alfred, Izydor";
  svatek["Dec 15"] = "15. Nina, Celina";
  svatek["Dec 16"] = "16. Albina, Zdzisław";
  svatek["Dec 17"] = "17. Olimpia, Łazarz";
  svatek["Dec 18"] = "18. Gracjan, Bogusław";
  svatek["Dec 19"] = "19. Gabriela, Dariusz";
  svatek["Dec 20"] = "20. Bogumiła, Dominika";
  svatek["Dec 21"] = "21. Tomasz, Tomisław";
  svatek["Dec 22"] = "22. Zenon, Honorata";
  svatek["Dec 23"] = "23. Wiktoria, Sławomira";
  svatek["Dec 24"] = "24. Adam, Ewa";
  svatek["Dec 25"] = "25. Anastazja, Eulalia";
  svatek["Dec 26"] = "26. Jana, Żaneta";
  svatek["Dec 27"] = "27. Teofila, Godzisław";
  svatek["Dec 28"] = "28. Jana, Maksym";
  svatek["Dec 29"] = "29. Dawid, Tomasz";
  svatek["Dec 30"] = "30. Irmina, Eugeniusz";
  svatek["Dec 31"] = "31. Melania, Sylwester";
}

var months = new Array(13);
months[1] = "January";
months[2] = "February";
months[3] = "March";
months[4] = "April";
months[5] = "May";
months[6] = "June";
months[7] = "July";
months[8] = "August";
months[9] = "September";
months[10] = "October";
months[11] = "November";
months[12] = "December";
var time = new Date();
var lmonth = months[time.getMonth() + 1];
var date = time.getDate();
var year = time.getYear();
var datum = new Date();
var dnes = ("" + datum).substring(4, 10);
datum.setDate(datum.getDate() + 1);
var zitra = ("" + datum).substring(4, 10);
if (year < 100) year = "19" + time.getYear();
else year = time.getFullYear();
//document.write(date + "." + " "+ lmonth + ", " + year + " :: name - day: " + "<b>" + svatek[dnes] + "</b>" + ", tomorrow: " + svatek[zitra] + ".");

// document.getElementById("nd_date").innerHTML = date + "." + " "+ lmonth + ", " + year;
document.getElementById("nd_today").innerHTML =
  "<i class='fa fa-birthday-cake fa-color-orange'></i>&nbsp;&nbsp;" + "<b>" + svatek[dnes].replace(/^\d+\.\s/g, "") + "</b>";

document.getElementById("nd_tommorow").innerHTML =
  "<i class='fa fa-birthday-cake fa-color-orange'></i>&nbsp;&nbsp;" + svatek[zitra].replace(/^\d+\.\s/g, "");
