var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari"
		},
		{
			prop: window.opera,
			identity: "Opera"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();

var browsertyp2 = BrowserDetect.browser; 
if(browsertyp2=='Explorer'){

svatek = new Array() ; 
svatek["Jan 1 "] = "Nový Rok" ; 
svatek["Jan 2 "] = "Karina" ; 
svatek["Jan 3 "] = "Radmila" ; 
svatek["Jan 4 "] = "Diana" ; 
svatek["Jan 5 "] = "Dalimil" ; 
svatek["Jan 6 "] = "Kašpar, Melichar a Baltazar" ; 
svatek["Jan 7 "] = "Vilma" ; 
svatek["Jan 8 "] = "Čestmír" ; 
svatek["Jan 9 "] = "Vladan" ; 
svatek["Jan 10"] = "Břetislav" ; 
svatek["Jan 11"] = "Bohdana" ; 
svatek["Jan 12"] = "Pravoslav" ; 
svatek["Jan 13"] = "Edita" ; 
svatek["Jan 14"] = "Radovan" ; 
svatek["Jan 15"] = "Alice" ; 
svatek["Jan 16"] = "Ctirad" ; 
svatek["Jan 17"] = "Drahoslav" ; 
svatek["Jan 18"] = "Vladislav" ; 
svatek["Jan 19"] = "Doubravka" ; 
svatek["Jan 20"] = "Ilona" ; 
svatek["Jan 21"] = "Běla" ; 
svatek["Jan 22"] = "Slavomír" ; 
svatek["Jan 23"] = "Zdeněk" ; 
svatek["Jan 24"] = "Milena" ; 
svatek["Jan 25"] = "Miloš" ; 
svatek["Jan 26"] = "Zora" ; 
svatek["Jan 27"] = "Ingrid" ; 
svatek["Jan 28"] = "Otýlie" ; 
svatek["Jan 29"] = "Zdislava" ; 
svatek["Jan 30"] = "Robin" ; 
svatek["Jan 31"] = "Marika" ; 
svatek["Feb 1 "] = "Hynek" ; 
svatek["Feb 2 "] = "Nela" ; 
svatek["Feb 3 "] = "Blažej" ; 
svatek["Feb 4 "] = "Jarmila" ; 
svatek["Feb 5 "] = "Dobromila" ; 
svatek["Feb 6 "] = "Vanda" ; 
svatek["Feb 7 "] = "Veronika" ; 
svatek["Feb 8 "] = "Milada" ; 
svatek["Feb 9 "] = "Apolena" ; 
svatek["Feb 10"] = "Mojmír" ; 
svatek["Feb 11"] = "Božena" ; 
svatek["Feb 12"] = "Slavěna" ; 
svatek["Feb 13"] = "Věnceslav" ; 
svatek["Feb 14"] = "Valentýn" ; 
svatek["Feb 15"] = "Jiřina" ; 
svatek["Feb 16"] = "Ljuba" ; 
svatek["Feb 17"] = "Miloslava" ; 
svatek["Feb 18"] = "Gizela" ; 
svatek["Feb 19"] = "Patrik" ; 
svatek["Feb 20"] = "Oldřich" ; 
svatek["Feb 21"] = "Lenka" ; 
svatek["Feb 22"] = "Petr" ; 
svatek["Feb 23"] = "Svatopluk" ; 
svatek["Feb 24"] = "Matěj" ; 
svatek["Feb 25"] = "Liliana" ; 
svatek["Feb 26"] = "Dorota" ; 
svatek["Feb 27"] = "Alexandr" ; 
svatek["Feb 28"] = "Lumír" ; 
svatek["Feb 29"] = "Horymír" ; 
svatek["Mar 1 "] = "Hynek" ; 
svatek["Mar 2 "] = "Anežka" ; 
svatek["Mar 3 "] = "Kamil" ; 
svatek["Mar 4 "] = "Stela" ; 
svatek["Mar 5 "] = "Kazimír" ; 
svatek["Mar 6 "] = "Miroslav" ; 
svatek["Mar 7 "] = "Tomáš" ; 
svatek["Mar 8 "] = "Gabriela" ; 
svatek["Mar 9 "] = "Františka" ; 
svatek["Mar 10"] = "Viktorie" ; 
svatek["Mar 11"] = "Anděla" ; 
svatek["Mar 12"] = "Řehoř" ; 
svatek["Mar 13"] = "Růžena" ; 
svatek["Mar 14"] = "Rút" ; 
svatek["Mar 15"] = "Ida" ; 
svatek["Mar 16"] = "Elena" ; 
svatek["Mar 17"] = "Vlastimil" ; 
svatek["Mar 18"] = "Eduard" ; 
svatek["Mar 19"] = "Josef" ; 
svatek["Mar 20"] = "Světlana" ; 
svatek["Mar 21"] = "Radek" ; 
svatek["Mar 22"] = "Leona" ; 
svatek["Mar 23"] = "Ivona" ; 
svatek["Mar 24"] = "Gabriel" ; 
svatek["Mar 25"] = "Marian" ; 
svatek["Mar 26"] = "Emanuel" ; 
svatek["Mar 27"] = "Dita" ; 
svatek["Mar 28"] = "Soňa" ; 
svatek["Mar 29"] = "Taťána" ; 
svatek["Mar 30"] = "Arnošt" ; 
svatek["Mar 31"] = "Kvido" ; 
svatek["Apr 1 "] = "Hugo" ; 
svatek["Apr 2 "] = "Erika" ; 
svatek["Apr 3 "] = "Richard" ; 
svatek["Apr 4 "] = "Ivana" ; 
svatek["Apr 5 "] = "Miroslava" ; 
svatek["Apr 6 "] = "Vendula" ; 
svatek["Apr 7 "] = "Heřman" ; 
svatek["Apr 8 "] = "Ema" ; 
svatek["Apr 9 "] = "Dušan" ; 
svatek["Apr 10"] = "Darja" ; 
svatek["Apr 11"] = "Izabela" ; 
svatek["Apr 12"] = "Julius" ; 
svatek["Apr 13"] = "Aleš" ; 
svatek["Apr 14"] = "Vincenc" ; 
svatek["Apr 15"] = "Anastázie" ; 
svatek["Apr 16"] = "Irena" ; 
svatek["Apr 17"] = "Rudolf" ; 
svatek["Apr 18"] = "Valérie" ; 
svatek["Apr 19"] = "Rostislav" ; 
svatek["Apr 20"] = "Marcela" ; 
svatek["Apr 21"] = "Alexandra" ; 
svatek["Apr 22"] = "Evženie" ; 
svatek["Apr 23"] = "Vojtěch" ; 
svatek["Apr 24"] = "Jiří" ; 
svatek["Apr 25"] = "Marek" ; 
svatek["Apr 26"] = "Oto" ; 
svatek["Apr 27"] = "Jaroslav" ; 
svatek["Apr 28"] = "Vladislav" ; 
svatek["Apr 29"] = "Robert" ; 
svatek["Apr 30"] = "Blahoslav" ; 
svatek["May 1 "] = "Stát.svát." ; 
svatek["May 2 "] = "Zikmund" ; 
svatek["May 3 "] = "Alexej" ; 
svatek["May 4 "] = "Květoslav" ; 
svatek["May 5 "] = "Klaudie" ; 
svatek["May 6 "] = "Radoslav" ; 
svatek["May 7 "] = "Stanislav" ; 
svatek["May 8 "] = "Stát.svát." ; 
svatek["May 9 "] = "Ctibor" ; 
svatek["May 10"] = "Blažena" ; 
svatek["May 11"] = "Svatava" ; 
svatek["May 12"] = "Pankrác" ; 
svatek["May 13"] = "Servác" ; 
svatek["May 14"] = "Bonifác" ; 
svatek["May 15"] = "Žofie" ; 
svatek["May 16"] = "Přemysl" ; 
svatek["May 17"] = "Aneta" ; 
svatek["May 18"] = "Nataša" ; 
svatek["May 19"] = "Ido" ; 
svatek["May 20"] = "Zbyšek" ; 
svatek["May 21"] = "Monika" ; 
svatek["May 22"] = "Emil" ; 
svatek["May 23"] = "Vladimír" ; 
svatek["May 24"] = "Jana" ; 
svatek["May 25"] = "Viola" ; 
svatek["May 26"] = "Filip" ; 
svatek["May 27"] = "Valdemar" ; 
svatek["May 28"] = "Vilém" ; 
svatek["May 29"] = "Maxim" ; 
svatek["May 30"] = "Ferdinand" ; 
svatek["May 31"] = "Kamila" ; 
svatek["Jun 1 "] = "Laura" ; 
svatek["Jun 2 "] = "Jarmil" ; 
svatek["Jun 3 "] = "Tamara" ; 
svatek["Jun 4 "] = "Dalibor" ; 
svatek["Jun 5 "] = "Dobroslav" ; 
svatek["Jun 6 "] = "Norbert" ; 
svatek["Jun 7 "] = "Iveta" ; 
svatek["Jun 8 "] = "Medard" ; 
svatek["Jun 9 "] = "Stanislava" ; 
svatek["Jun 10"] = "Gita" ; 
svatek["Jun 11"] = "Bruno" ; 
svatek["Jun 12"] = "Antonie" ; 
svatek["Jun 13"] = "Antonín" ; 
svatek["Jun 14"] = "Roland" ; 
svatek["Jun 15"] = "Vít" ; 
svatek["Jun 16"] = "Zbyněk" ; 
svatek["Jun 17"] = "Adolf" ; 
svatek["Jun 18"] = "Milan" ; 
svatek["Jun 19"] = "Leoš" ; 
svatek["Jun 20"] = "Květa" ; 
svatek["Jun 21"] = "Alois" ; 
svatek["Jun 22"] = "Pavla" ; 
svatek["Jun 23"] = "Zdeňka" ; 
svatek["Jun 24"] = "Jan" ; 
svatek["Jun 25"] = "Ivan" ; 
svatek["Jun 26"] = "Adriana" ; 
svatek["Jun 27"] = "Ladislav" ; 
svatek["Jun 28"] = "Lubomír" ; 
svatek["Jun 29"] = "Petr a Pavel" ; 
svatek["Jun 30"] = "Šárka" ; 
svatek["Jul 1 "] = "Jaroslava" ; 
svatek["Jul 2 "] = "Patricie" ; 
svatek["Jul 3 "] = "Radomír" ; 
svatek["Jul 4 "] = "Prokop" ; 
svatek["Jul 5 "] = "Cyril a Metoděj" ; 
svatek["Jul 6 "] = "Hus" ; 
svatek["Jul 7 "] = "Bohuslava" ; 
svatek["Jul 8 "] = "Nora" ; 
svatek["Jul 9 "] = "Drahoslava" ; 
svatek["Jul 10"] = "Libuše" ; 
svatek["Jul 11"] = "Olga" ; 
svatek["Jul 12"] = "Bořek" ; 
svatek["Jul 13"] = "Markéta" ; 
svatek["Jul 14"] = "Karolína" ; 
svatek["Jul 15"] = "Jindřich" ; 
svatek["Jul 16"] = "Luboš" ; 
svatek["Jul 17"] = "Martina" ; 
svatek["Jul 18"] = "Drahomíra" ; 
svatek["Jul 19"] = "Čeněk" ; 
svatek["Jul 20"] = "Ilja" ; 
svatek["Jul 21"] = "Vítězslav" ; 
svatek["Jul 22"] = "Magdaléna" ; 
svatek["Jul 23"] = "Libor" ; 
svatek["Jul 24"] = "Kristýna" ; 
svatek["Jul 25"] = "Jakub" ; 
svatek["Jul 26"] = "Anna" ; 
svatek["Jul 27"] = "Věroslav" ; 
svatek["Jul 28"] = "Viktor" ; 
svatek["Jul 29"] = "Marta" ; 
svatek["Jul 30"] = "Bořivoj" ; 
svatek["Jul 31"] = "Ignác" ; 
svatek["Aug 1 "] = "Oskar" ; 
svatek["Aug 2 "] = "Gustav" ; 
svatek["Aug 3 "] = "Miluše" ; 
svatek["Aug 4 "] = "Diminik" ; 
svatek["Aug 5 "] = "Kristián" ; 
svatek["Aug 6 "] = "Oldřiška" ; 
svatek["Aug 7 "] = "Lada" ; 
svatek["Aug 8 "] = "Soběslav" ; 
svatek["Aug 9 "] = "Roman" ; 
svatek["Aug 10"] = "Vavřinec" ; 
svatek["Aug 11"] = "Zuzana" ; 
svatek["Aug 12"] = "Klára" ; 
svatek["Aug 13"] = "Alena" ; 
svatek["Aug 14"] = "Alan" ; 
svatek["Aug 15"] = "Hana" ; 
svatek["Aug 16"] = "Jáchym" ; 
svatek["Aug 17"] = "Petra" ; 
svatek["Aug 18"] = "Helena" ; 
svatek["Aug 19"] = "Ludvík" ; 
svatek["Aug 20"] = "Bernard" ; 
svatek["Aug 21"] = "Johana" ; 
svatek["Aug 22"] = "Bohuslav" ; 
svatek["Aug 23"] = "Sandra" ; 
svatek["Aug 24"] = "Bartoloměj" ; 
svatek["Aug 25"] = "Radim" ; 
svatek["Aug 26"] = "Luděk" ; 
svatek["Aug 27"] = "Otakar" ; 
svatek["Aug 28"] = "Augustýn" ; 
svatek["Aug 29"] = "Evelína" ; 
svatek["Aug 30"] = "Vladěna" ; 
svatek["Aug 31"] = "Pavlína" ; 
svatek["Sep 1 "] = "Linda" ; 
svatek["Sep 2 "] = "Adéla" ; 
svatek["Sep 3 "] = "Bronislav" ; 
svatek["Sep 4 "] = "Jindřiška" ; 
svatek["Sep 5 "] = "Boris" ; 
svatek["Sep 6 "] = "Boleslav" ; 
svatek["Sep 7 "] = "Regina" ; 
svatek["Sep 8 "] = "Mariana" ; 
svatek["Sep 9 "] = "Daniela" ; 
svatek["Sep 10"] = "Irma" ; 
svatek["Sep 11"] = "Denisa" ; 
svatek["Sep 12"] = "Marie" ; 
svatek["Sep 13"] = "Lubor" ; 
svatek["Sep 14"] = "Radka" ; 
svatek["Sep 15"] = "Jolana" ; 
svatek["Sep 16"] = "Ludmila" ; 
svatek["Sep 17"] = "Naděžda" ; 
svatek["Sep 18"] = "Kryštof" ; 
svatek["Sep 19"] = "Zita" ; 
svatek["Sep 20"] = "Oleg" ; 
svatek["Sep 21"] = "Matouš" ; 
svatek["Sep 22"] = "Darina" ; 
svatek["Sep 23"] = "Berta" ; 
svatek["Sep 24"] = "Jaromír" ; 
svatek["Sep 25"] = "Zlata" ; 
svatek["Sep 26"] = "Andrea" ; 
svatek["Sep 27"] = "Jonáš" ; 
svatek["Sep 28"] = "Václav" ; 
svatek["Sep 29"] = "Michal" ; 
svatek["Sep 30"] = "Jeroným" ; 
svatek["Oct 1 "] = "Igor" ; 
svatek["Oct 2 "] = "Galina" ; 
svatek["Oct 3 "] = "Bohumil" ; 
svatek["Oct 4 "] = "František" ; 
svatek["Oct 5 "] = "Eliška" ; 
svatek["Oct 6 "] = "Hanuš" ; 
svatek["Oct 7 "] = "Justýna" ; 
svatek["Oct 8 "] = "Věra" ; 
svatek["Oct 9 "] = "Štefan" ; 
svatek["Oct 10"] = "Marina" ; 
svatek["Oct 11"] = "Andrej" ; 
svatek["Oct 12"] = "Marcel" ; 
svatek["Oct 13"] = "Renata" ; 
svatek["Oct 14"] = "Agáta" ; 
svatek["Oct 15"] = "Tereza" ; 
svatek["Oct 16"] = "Havel" ; 
svatek["Oct 17"] = "Hedvika" ; 
svatek["Oct 18"] = "Lukáš" ; 
svatek["Oct 19"] = "Michaela" ; 
svatek["Oct 20"] = "Vendelín" ; 
svatek["Oct 21"] = "Brigita" ; 
svatek["Oct 22"] = "Sabina" ; 
svatek["Oct 23"] = "Teodor" ; 
svatek["Oct 24"] = "Nina" ; 
svatek["Oct 25"] = "Beáta" ; 
svatek["Oct 26"] = "Erik" ; 
svatek["Oct 27"] = "Šarlota" ; 
svatek["Oct 28"] = "Státní svátek" ; 
svatek["Oct 29"] = "Sylva" ; 
svatek["Oct 30"] = "Tadeáš" ; 
svatek["Oct 31"] = "Štěpánka" ; 
svatek["Nov 1 "] = "Felix" ; 
svatek["Nov 2 "] = "Dušičky" ; 
svatek["Nov 3 "] = "Hubert" ; 
svatek["Nov 4 "] = "Karel" ; 
svatek["Nov 5 "] = "Miriam" ; 
svatek["Nov 6 "] = "Liběna" ; 
svatek["Nov 7 "] = "Saskie" ; 
svatek["Nov 8 "] = "Bohumír" ; 
svatek["Nov 9 "] = "Bohdan" ; 
svatek["Nov 10"] = "Evžen" ; 
svatek["Nov 11"] = "Martin" ; 
svatek["Nov 12"] = "Benedikt" ; 
svatek["Nov 13"] = "Tibor" ; 
svatek["Nov 14"] = "Sáva" ; 
svatek["Nov 15"] = "Leopold" ; 
svatek["Nov 16"] = "Otmar" ; 
svatek["Nov 17"] = "Mahulena" ; 
svatek["Nov 18"] = "Romana" ; 
svatek["Nov 19"] = "Alžběta" ; 
svatek["Nov 20"] = "Nikola" ; 
svatek["Nov 21"] = "Albert" ; 
svatek["Nov 22"] = "Cecílie" ; 
svatek["Nov 23"] = "Klement" ; 
svatek["Nov 24"] = "Emílie" ; 
svatek["Nov 25"] = "Kateřina" ; 
svatek["Nov 26"] = "Artur" ; 
svatek["Nov 27"] = "Xénie" ; 
svatek["Nov 28"] = "René" ; 
svatek["Nov 29"] = "Zina" ; 
svatek["Nov 30"] = "Ondřej" ; 
svatek["Dec 1 "] = "Iva" ; 
svatek["Dec 2 "] = "Blanka" ; 
svatek["Dec 3 "] = "Svatoslav" ; 
svatek["Dec 4 "] = "Barbora" ; 
svatek["Dec 5 "] = "Jitka" ; 
svatek["Dec 6 "] = "Mikuláš" ; 
svatek["Dec 7 "] = "Ambrož" ; 
svatek["Dec 8 "] = "Květoslava" ; 
svatek["Dec 9 "] = "Vratislav" ; 
svatek["Dec 10"] = "Julie" ; 
svatek["Dec 11"] = "Dana" ; 
svatek["Dec 12"] = "Simona" ; 
svatek["Dec 13"] = "Lucie" ; 
svatek["Dec 14"] = "Lýdie" ; 
svatek["Dec 15"] = "Radana" ; 
svatek["Dec 16"] = "Albína" ; 
svatek["Dec 17"] = "Daniel" ; 
svatek["Dec 18"] = "Miloslav" ; 
svatek["Dec 19"] = "Ester" ; 
svatek["Dec 20"] = "Dagmar" ; 
svatek["Dec 21"] = "Natálie" ; 
svatek["Dec 22"] = "Šimon" ; 
svatek["Dec 23"] = "Vlasta" ; 
svatek["Dec 24"] = "Adam a Eva" ; 
svatek["Dec 25"] = "1. svátek vánoční, Boží hod" ; 
svatek["Dec 26"] = "2. svátek vánoční, Štěpán" ; 
svatek["Dec 27"] = "Žaneta" ; 
svatek["Dec 28"] = "Bohumila" ; 
svatek["Dec 29"] = "Judita" ; 
svatek["Dec 30"] = "David" ; 
svatek["Dec 31"] = "Silvestr" ;

}else{

svatek = new Array() ; 
svatek["Jan 01"] = "Nový Rok" ; 
svatek["Jan 02"] = "Karina" ; 
svatek["Jan 03"] = "Radmila" ; 
svatek["Jan 04"] = "Diana" ; 
svatek["Jan 05"] = "Dalimil" ; 
svatek["Jan 06"] = "Kašpar, Melichar a Baltazar" ; 
svatek["Jan 07"] = "Vilma" ; 
svatek["Jan 08"] = "Čestmír" ; 
svatek["Jan 09"] = "Vladan" ; 
svatek["Jan 10"] = "Břetislav" ; 
svatek["Jan 11"] = "Bohdana" ; 
svatek["Jan 12"] = "Pravoslav" ; 
svatek["Jan 13"] = "Edita" ; 
svatek["Jan 14"] = "Radovan" ; 
svatek["Jan 15"] = "Alice" ; 
svatek["Jan 16"] = "Ctirad" ; 
svatek["Jan 17"] = "Drahoslav" ; 
svatek["Jan 18"] = "Vladislav" ; 
svatek["Jan 19"] = "Doubravka" ; 
svatek["Jan 20"] = "Ilona" ; 
svatek["Jan 21"] = "Běla" ; 
svatek["Jan 22"] = "Slavomír" ; 
svatek["Jan 23"] = "Zdeněk" ; 
svatek["Jan 24"] = "Milena" ; 
svatek["Jan 25"] = "Miloš" ; 
svatek["Jan 26"] = "Zora" ; 
svatek["Jan 27"] = "Ingrid" ; 
svatek["Jan 28"] = "Otýlie" ; 
svatek["Jan 29"] = "Zdislava" ; 
svatek["Jan 30"] = "Robin" ; 
svatek["Jan 31"] = "Marika" ; 
svatek["Feb 01"] = "Hynek" ; 
svatek["Feb 02"] = "Nela" ; 
svatek["Feb 03"] = "Blažej" ; 
svatek["Feb 04"] = "Jarmila" ; 
svatek["Feb 05"] = "Dobromila" ; 
svatek["Feb 06"] = "Vanda" ; 
svatek["Feb 07"] = "Veronika" ; 
svatek["Feb 08"] = "Milada" ; 
svatek["Feb 09"] = "Apolena" ; 
svatek["Feb 10"] = "Mojmír" ; 
svatek["Feb 11"] = "Božena" ; 
svatek["Feb 12"] = "Slavěna" ; 
svatek["Feb 13"] = "Věnceslav" ; 
svatek["Feb 14"] = "Valentýn" ; 
svatek["Feb 15"] = "Jiřina" ; 
svatek["Feb 16"] = "Ljuba" ; 
svatek["Feb 17"] = "Miloslava" ; 
svatek["Feb 18"] = "Gizela" ; 
svatek["Feb 19"] = "Patrik" ; 
svatek["Feb 20"] = "Oldřich" ; 
svatek["Feb 21"] = "Lenka" ; 
svatek["Feb 22"] = "Petr" ; 
svatek["Feb 23"] = "Svatopluk" ; 
svatek["Feb 24"] = "Matěj" ; 
svatek["Feb 25"] = "Liliana" ; 
svatek["Feb 26"] = "Dorota" ; 
svatek["Feb 27"] = "Alexandr" ; 
svatek["Feb 28"] = "Lumír" ; 
svatek["Feb 29"] = "Horymír" ; 
svatek["Mar 01"] = "Hynek" ; 
svatek["Mar 02"] = "Anežka" ; 
svatek["Mar 03"] = "Kamil" ; 
svatek["Mar 04"] = "Stela" ; 
svatek["Mar 05"] = "Kazimír" ; 
svatek["Mar 06"] = "Miroslav" ; 
svatek["Mar 07"] = "Tomáš" ; 
svatek["Mar 08"] = "Gabriela" ; 
svatek["Mar 09"] = "Františka" ; 
svatek["Mar 10"] = "Viktorie" ; 
svatek["Mar 11"] = "Anděla" ; 
svatek["Mar 12"] = "Řehoř" ; 
svatek["Mar 13"] = "Růžena" ; 
svatek["Mar 14"] = "Rút" ; 
svatek["Mar 15"] = "Ida" ; 
svatek["Mar 16"] = "Elena" ; 
svatek["Mar 17"] = "Vlastimil" ; 
svatek["Mar 18"] = "Eduard" ; 
svatek["Mar 19"] = "Josef" ; 
svatek["Mar 20"] = "Světlana" ; 
svatek["Mar 21"] = "Radek" ; 
svatek["Mar 22"] = "Leona" ; 
svatek["Mar 23"] = "Ivona" ; 
svatek["Mar 24"] = "Gabriel" ; 
svatek["Mar 25"] = "Marian" ; 
svatek["Mar 26"] = "Emanuel" ; 
svatek["Mar 27"] = "Dita" ; 
svatek["Mar 28"] = "Soňa" ; 
svatek["Mar 29"] = "Taťána" ; 
svatek["Mar 30"] = "Arnošt" ; 
svatek["Mar 31"] = "Kvido" ; 
svatek["Apr 01"] = "Hugo" ; 
svatek["Apr 02"] = "Erika" ; 
svatek["Apr 03"] = "Richard" ; 
svatek["Apr 04"] = "Ivana" ; 
svatek["Apr 05"] = "Miroslava" ; 
svatek["Apr 06"] = "Vendula" ; 
svatek["Apr 07"] = "Heřman" ; 
svatek["Apr 08"] = "Ema" ; 
svatek["Apr 09"] = "Dušan" ; 
svatek["Apr 10"] = "Darja" ; 
svatek["Apr 11"] = "Izabela" ; 
svatek["Apr 12"] = "Julius" ; 
svatek["Apr 13"] = "Aleš" ; 
svatek["Apr 14"] = "Vincenc" ; 
svatek["Apr 15"] = "Anastázie" ; 
svatek["Apr 16"] = "Irena" ; 
svatek["Apr 17"] = "Rudolf" ; 
svatek["Apr 18"] = "Valérie" ; 
svatek["Apr 19"] = "Rostislav" ; 
svatek["Apr 20"] = "Marcela" ; 
svatek["Apr 21"] = "Alexandra" ; 
svatek["Apr 22"] = "Evženie" ; 
svatek["Apr 23"] = "Vojtěch" ; 
svatek["Apr 24"] = "Jiří" ; 
svatek["Apr 25"] = "Marek" ; 
svatek["Apr 26"] = "Oto" ; 
svatek["Apr 27"] = "Jaroslav" ; 
svatek["Apr 28"] = "Vladislav" ; 
svatek["Apr 29"] = "Robert" ; 
svatek["Apr 30"] = "Blahoslav" ; 
svatek["May 01"] = "Stát.svát." ; 
svatek["May 02"] = "Zikmund" ; 
svatek["May 03"] = "Alexej" ; 
svatek["May 04"] = "Květoslav" ; 
svatek["May 05"] = "Klaudie" ; 
svatek["May 06"] = "Radoslav" ; 
svatek["May 07"] = "Stanislav" ; 
svatek["May 08"] = "Stát.svát." ; 
svatek["May 09"] = "Ctibor" ; 
svatek["May 10"] = "Blažena" ; 
svatek["May 11"] = "Svatava" ; 
svatek["May 12"] = "Pankrác" ; 
svatek["May 13"] = "Servác" ; 
svatek["May 14"] = "Bonifác" ; 
svatek["May 15"] = "Žofie" ; 
svatek["May 16"] = "Přemysl" ; 
svatek["May 17"] = "Aneta" ; 
svatek["May 18"] = "Nataša" ; 
svatek["May 19"] = "Ido" ; 
svatek["May 20"] = "Zbyšek" ; 
svatek["May 21"] = "Monika" ; 
svatek["May 22"] = "Emil" ; 
svatek["May 23"] = "Vladimír" ; 
svatek["May 24"] = "Jana" ; 
svatek["May 25"] = "Viola" ; 
svatek["May 26"] = "Filip" ; 
svatek["May 27"] = "Valdemar" ; 
svatek["May 28"] = "Vilém" ; 
svatek["May 29"] = "Maxim" ; 
svatek["May 30"] = "Ferdinand" ; 
svatek["May 31"] = "Kamila" ; 
svatek["Jun 01"] = "Laura" ; 
svatek["Jun 02"] = "Jarmil" ; 
svatek["Jun 03"] = "Tamara" ; 
svatek["Jun 04"] = "Dalibor" ; 
svatek["Jun 05"] = "Dobroslav" ; 
svatek["Jun 06"] = "Norbert" ; 
svatek["Jun 07"] = "Iveta" ; 
svatek["Jun 08"] = "Medard" ; 
svatek["Jun 09"] = "Stanislava" ; 
svatek["Jun 10"] = "Gita" ; 
svatek["Jun 11"] = "Bruno" ; 
svatek["Jun 12"] = "Antonie" ; 
svatek["Jun 13"] = "Antonín" ; 
svatek["Jun 14"] = "Roland" ; 
svatek["Jun 15"] = "Vít" ; 
svatek["Jun 16"] = "Zbyněk" ; 
svatek["Jun 17"] = "Adolf" ; 
svatek["Jun 18"] = "Milan" ; 
svatek["Jun 19"] = "Leoš" ; 
svatek["Jun 20"] = "Květa" ; 
svatek["Jun 21"] = "Alois" ; 
svatek["Jun 22"] = "Pavla" ; 
svatek["Jun 23"] = "Zdeňka" ; 
svatek["Jun 24"] = "Jan" ; 
svatek["Jun 25"] = "Ivan" ; 
svatek["Jun 26"] = "Adriana" ; 
svatek["Jun 27"] = "Ladislav" ; 
svatek["Jun 28"] = "Lubomír" ; 
svatek["Jun 29"] = "Petr a Pavel" ; 
svatek["Jun 30"] = "Šárka" ; 
svatek["Jul 01"] = "Jaroslava" ; 
svatek["Jul 02"] = "Patricie" ; 
svatek["Jul 03"] = "Radomír" ; 
svatek["Jul 04"] = "Prokop" ; 
svatek["Jul 05"] = "Cyril a Metoděj" ; 
svatek["Jul 06"] = "Hus" ; 
svatek["Jul 07"] = "Bohuslava" ; 
svatek["Jul 08"] = "Nora" ; 
svatek["Jul 09"] = "Drahoslava" ; 
svatek["Jul 10"] = "Libuše" ; 
svatek["Jul 11"] = "Olga" ; 
svatek["Jul 12"] = "Bořek" ; 
svatek["Jul 13"] = "Markéta" ; 
svatek["Jul 14"] = "Karolína" ; 
svatek["Jul 15"] = "Jindřich" ; 
svatek["Jul 16"] = "Luboš" ; 
svatek["Jul 17"] = "Martina" ; 
svatek["Jul 18"] = "Drahomíra" ; 
svatek["Jul 19"] = "Čeněk" ; 
svatek["Jul 20"] = "Ilja" ; 
svatek["Jul 21"] = "Vítězslav" ; 
svatek["Jul 22"] = "Magdaléna" ; 
svatek["Jul 23"] = "Libor" ; 
svatek["Jul 24"] = "Kristýna" ; 
svatek["Jul 25"] = "Jakub" ; 
svatek["Jul 26"] = "Anna" ; 
svatek["Jul 27"] = "Věroslav" ; 
svatek["Jul 28"] = "Viktor" ; 
svatek["Jul 29"] = "Marta" ; 
svatek["Jul 30"] = "Bořivoj" ; 
svatek["Jul 31"] = "Ignác" ; 
svatek["Aug 01"] = "Oskar" ; 
svatek["Aug 02"] = "Gustav" ; 
svatek["Aug 03"] = "Miluše" ; 
svatek["Aug 04"] = "Dominik" ; 
svatek["Aug 05"] = "Kristián" ; 
svatek["Aug 06"] = "Oldřiška" ; 
svatek["Aug 07"] = "Lada" ; 
svatek["Aug 08"] = "Soběslav" ; 
svatek["Aug 09"] = "Roman" ; 
svatek["Aug 10"] = "Vavřinec" ; 
svatek["Aug 11"] = "Zuzana" ; 
svatek["Aug 12"] = "Klára" ; 
svatek["Aug 13"] = "Alena" ; 
svatek["Aug 14"] = "Alan" ; 
svatek["Aug 15"] = "Hana" ; 
svatek["Aug 16"] = "Jáchym" ; 
svatek["Aug 17"] = "Petra" ; 
svatek["Aug 18"] = "Helena" ; 
svatek["Aug 19"] = "Ludvík" ; 
svatek["Aug 20"] = "Bernard" ; 
svatek["Aug 21"] = "Johana" ; 
svatek["Aug 22"] = "Bohuslav" ; 
svatek["Aug 23"] = "Sandra" ; 
svatek["Aug 24"] = "Bartoloměj" ; 
svatek["Aug 25"] = "Radim" ; 
svatek["Aug 26"] = "Luděk" ; 
svatek["Aug 27"] = "Otakar" ; 
svatek["Aug 28"] = "Augustýn" ; 
svatek["Aug 29"] = "Evelína" ; 
svatek["Aug 30"] = "Vladěna" ; 
svatek["Aug 31"] = "Pavlína" ; 
svatek["Sep 01"] = "Linda" ; 
svatek["Sep 02"] = "Adéla" ; 
svatek["Sep 03"] = "Bronislav" ; 
svatek["Sep 04"] = "Jindřiška" ; 
svatek["Sep 05"] = "Boris" ; 
svatek["Sep 06"] = "Boleslav" ; 
svatek["Sep 07"] = "Regina" ; 
svatek["Sep 08"] = "Mariana" ; 
svatek["Sep 09"] = "Daniela" ; 
svatek["Sep 10"] = "Irma" ; 
svatek["Sep 11"] = "Denisa" ; 
svatek["Sep 12"] = "Marie" ; 
svatek["Sep 13"] = "Lubor" ; 
svatek["Sep 14"] = "Radka" ; 
svatek["Sep 15"] = "Jolana" ; 
svatek["Sep 16"] = "Ludmila" ; 
svatek["Sep 17"] = "Naděžda" ; 
svatek["Sep 18"] = "Kryštof" ; 
svatek["Sep 19"] = "Zita" ; 
svatek["Sep 20"] = "Oleg" ; 
svatek["Sep 21"] = "Matouš" ; 
svatek["Sep 22"] = "Darina" ; 
svatek["Sep 23"] = "Berta" ; 
svatek["Sep 24"] = "Jaromír" ; 
svatek["Sep 25"] = "Zlata" ; 
svatek["Sep 26"] = "Andrea" ; 
svatek["Sep 27"] = "Jonáš" ; 
svatek["Sep 28"] = "Václav" ; 
svatek["Sep 29"] = "Michal" ; 
svatek["Sep 30"] = "Jeroným" ; 
svatek["Oct 01"] = "Igor" ; 
svatek["Oct 02"] = "Galina" ; 
svatek["Oct 03"] = "Bohumil" ; 
svatek["Oct 04"] = "František" ; 
svatek["Oct 05"] = "Eliška" ; 
svatek["Oct 06"] = "Hanuš" ; 
svatek["Oct 07"] = "Justýna" ; 
svatek["Oct 08"] = "Věra" ; 
svatek["Oct 09"] = "Štefan" ; 
svatek["Oct 10"] = "Marina" ; 
svatek["Oct 11"] = "Andrej" ; 
svatek["Oct 12"] = "Marcel" ; 
svatek["Oct 13"] = "Renata" ; 
svatek["Oct 14"] = "Agáta" ; 
svatek["Oct 15"] = "Tereza" ; 
svatek["Oct 16"] = "Havel" ; 
svatek["Oct 17"] = "Hedvika" ; 
svatek["Oct 18"] = "Lukáš" ; 
svatek["Oct 19"] = "Michaela" ; 
svatek["Oct 20"] = "Vendelín" ; 
svatek["Oct 21"] = "Brigita" ; 
svatek["Oct 22"] = "Sabina" ; 
svatek["Oct 23"] = "Teodor" ; 
svatek["Oct 24"] = "Nina" ; 
svatek["Oct 25"] = "Beáta" ; 
svatek["Oct 26"] = "Erik" ; 
svatek["Oct 27"] = "Šarlota" ; 
svatek["Oct 28"] = "Státní svátek" ; 
svatek["Oct 29"] = "Sylva" ; 
svatek["Oct 30"] = "Tadeáš" ; 
svatek["Oct 31"] = "Štěpánka" ; 
svatek["Nov 01"] = "Felix" ; 
svatek["Nov 02"] = "Dušičky" ; 
svatek["Nov 03"] = "Hubert" ; 
svatek["Nov 04"] = "Karel" ; 
svatek["Nov 05"] = "Miriam" ; 
svatek["Nov 06"] = "Liběna" ; 
svatek["Nov 07"] = "Saskie" ; 
svatek["Nov 08"] = "Bohumír" ; 
svatek["Nov 09"] = "Bohdan" ; 
svatek["Nov 10"] = "Evžen" ; 
svatek["Nov 11"] = "Martin" ; 
svatek["Nov 12"] = "Benedikt" ; 
svatek["Nov 13"] = "Tibor" ; 
svatek["Nov 14"] = "Sáva" ; 
svatek["Nov 15"] = "Leopold" ; 
svatek["Nov 16"] = "Otmar" ; 
svatek["Nov 17"] = "Mahulena" ; 
svatek["Nov 18"] = "Romana" ; 
svatek["Nov 19"] = "Alžběta" ; 
svatek["Nov 20"] = "Nikola" ; 
svatek["Nov 21"] = "Albert" ; 
svatek["Nov 22"] = "Cecílie" ; 
svatek["Nov 23"] = "Klement" ; 
svatek["Nov 24"] = "Emílie" ; 
svatek["Nov 25"] = "Kateřina" ; 
svatek["Nov 26"] = "Artur" ; 
svatek["Nov 27"] = "Xénie" ; 
svatek["Nov 28"] = "René" ; 
svatek["Nov 29"] = "Zina" ; 
svatek["Nov 30"] = "Ondřej" ; 
svatek["Dec 01"] = "Iva" ; 
svatek["Dec 02"] = "Blanka" ; 
svatek["Dec 03"] = "Svatoslav" ; 
svatek["Dec 04"] = "Barbora" ; 
svatek["Dec 05"] = "Jitka" ; 
svatek["Dec 06"] = "Mikuláš" ; 
svatek["Dec 07"] = "Ambrož" ; 
svatek["Dec 08"] = "Květoslava" ; 
svatek["Dec 09"] = "Vratislav" ; 
svatek["Dec 10"] = "Julie" ; 
svatek["Dec 11"] = "Dana" ; 
svatek["Dec 12"] = "Simona" ; 
svatek["Dec 13"] = "Lucie" ; 
svatek["Dec 14"] = "Lýdie" ; 
svatek["Dec 15"] = "Radana" ; 
svatek["Dec 16"] = "Albína" ; 
svatek["Dec 17"] = "Daniel" ; 
svatek["Dec 18"] = "Miloslav" ; 
svatek["Dec 19"] = "Ester" ; 
svatek["Dec 20"] = "Dagmar" ; 
svatek["Dec 21"] = "Natálie" ; 
svatek["Dec 22"] = "Šimon" ; 
svatek["Dec 23"] = "Vlasta" ; 
svatek["Dec 24"] = "Adam a Eva" ; 
svatek["Dec 25"] = "1. svátek vánoční, Boží hod" ; 
svatek["Dec 26"] = "2. svátek vánoční, Štěpán" ; 
svatek["Dec 27"] = "Žaneta" ; 
svatek["Dec 28"] = "Bohumila" ; 
svatek["Dec 29"] = "Judita" ; 
svatek["Dec 30"] = "David" ; 
svatek["Dec 31"] = "Silvestr" ;

}

var months=new Array(13);
months[1]="January";
months[2]="February";
months[3]="March";
months[4]="April";
months[5]="May";
months[6]="June";
months[7]="July";
months[8]="August";
months[9]="September";
months[10]="October";
months[11]="November";
months[12]="December";
var time=new Date();
var lmonth=months[time.getMonth() + 1];
var date=time.getDate();
var year=time.getYear();
var datum = new Date() ; 
var dnes = ("" + datum).substring(4,10) ; 
datum.setDate(datum.getDate() + 1) ; 
var zitra = ("" + datum).substring(4,10) ;
if (year<100) year="19" + time.getYear();
else year=time.getFullYear();
//document.write(date + "." + " "+ lmonth + ", " + year + " :: name - day: " + "<b>" + svatek[dnes] + "</b>" + ", tomorrow: " + svatek[zitra] + ".");
document.getElementById("nd_date").innerHTML = date + "." + " "+ lmonth + ", " + year;
document.getElementById("nd_nd").innerHTML = "<i class='fa fa-birthday-cake fa-color-orange'></i>&nbsp;&nbsp;" + "<b>" + svatek[dnes] + "</b>" + ", tomorrow: " + svatek[zitra];    