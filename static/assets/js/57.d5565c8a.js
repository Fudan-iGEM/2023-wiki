(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{490:function(t,e,a){"use strict";a.r(e);var r=a(3),n=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("Improve your part design with 50000+ parts！")]),t._v(" "),e("p",[t._v("Try our public PartHub "),e("a",{attrs:{href:"http://3.238.241.161:5000/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v("!")]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),e("p",[t._v("For more information, please visit our wiki page "),e("a",{attrs:{href:"https://2022.igem.wiki/fudan/software",target:"_blank",rel:"noopener noreferrer"}},[t._v("Software | Fudan - iGEM 2022"),e("OutboundLink")],1),t._v(" "),e("img",{attrs:{src:"https://static.igem.wiki/teams/4162/wiki/software/multi-device.png",alt:"multi-device.png (3011×2006) (igem.wiki)"}})]),t._v(" "),e("h3",{attrs:{id:"highlight"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#highlight"}},[t._v("#")]),t._v(" Highlight")]),t._v(" "),e("ul",[e("li",[t._v("A quick, efficient and powerful tool for building and designing new parts")]),t._v(" "),e("li",[t._v("Provide multiple ways for searching for 50000+ existing parts with Registry of Standard Biological Parts platform")]),t._v(" "),e("li",[t._v("Visualization of the relationship between parts")]),t._v(" "),e("li",[t._v("Can be used across various platforms, and intuitive workflow")])]),t._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("p",[e("em",[e("strong",[t._v("If you only want to use "),e("a",{attrs:{href:"http://3.238.241.161:5000/",target:"_blank",rel:"noopener noreferrer"}},[t._v("the public PartHub"),e("OutboundLink")],1),t._v(", you don't need to perform installation. Please click "),e("a",{attrs:{href:"https://gitlab.igem.org/2022/software-tools/fudan#for-common-users",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(" and read the how-to section.")])])]),t._v(" "),e("p",[t._v("Since there is no image of Oracle JDK in the docker hub, it is not convenient to install PartHub using docker. We recommend using Amazon Machine Image (AMI) to install it.")]),t._v(" "),e("h3",{attrs:{id:"recommended-install-with-ami"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#recommended-install-with-ami"}},[t._v("#")]),t._v(" (Recommended) Install with AMI")]),t._v(" "),e("p",[e("em",[e("strong",[t._v("Quick installation guide")])])]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Open the Amazon EC2 console at https://console.amazonaws.cn/ec2/.")])]),t._v(" "),e("li",[e("p",[t._v("Under "),e("strong",[t._v("Images > AMI Catalog")]),t._v(", do the following:")])])]),t._v(" "),e("p",[t._v("a. Search "),e("em",[e("strong",[t._v("PartHub")])]),t._v(" in "),e("strong",[t._v("Community AMls")])]),t._v(" "),e("p",[t._v("b. Select the PartHub AMI (ami-036510704fd194c8f) and choose "),e("strong",[t._v("Launch Instance with AMI")])]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[e("p",[t._v("Select  "),e("strong",[t._v("Instance type")]),t._v(" as "),e("strong",[t._v("t3.xlarge or higher")]),t._v(" and "),e("strong",[t._v("Launch instance")]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("Configure the  "),e("strong",[t._v("Inbound rules")]),t._v(" under "),e("strong",[t._v("Network & Security >  Security Groups")]),t._v("  as follows:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("IP version")])]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("Type")])]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("Protocol")])]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("Port range")])]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("Source")])]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("Description")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("IPv4")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Custom TCP")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("TCP")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("7687")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("0.0.0.0/0")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("neo4j")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("IPv4")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Custom TCP")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("TCP")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("7474")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("0.0.0.0/0")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("neo4j")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("IPv4")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Custom TCP")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("TCP")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("5000")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("0.0.0.0/0")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("web")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("IPv4")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("SSH")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("TCP")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("22")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("0.0.0.0/0")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("–")])])])])]),t._v(" "),e("li",[e("p",[t._v("Connect to your server using SSH, and run the following in your Terminal:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("screen")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-S")]),t._v(" neo4j\n")])])]),e("p",[t._v("then run the following in the "),e("code",[t._v("screen")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /usr/local/neo4j-community-4.4.11/bin/\n./neo4j console\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Press Crtl + A and then press D to detach the "),e("code",[t._v("screen")]),t._v(" session and run the following in your Terminal:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("screen -S web\n")])])]),e("p",[t._v("then run the following in the "),e("code",[t._v("screen")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /home/ubuntu/fudan-main/\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" venv/bin/activate\npython /home/ubuntu/fudan-main/DataBase/LoadCSVFile.py\ngunicorn "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-b")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:5000 app:app\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Visit http://serverIP:5000/ (change serverIP to the IP of your server) and start using your PartHub!")])])]),t._v(" "),e("h3",{attrs:{id:"manual-installation-for-local-deployment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#manual-installation-for-local-deployment"}},[t._v("#")]),t._v(" Manual installation (For local deployment)")]),t._v(" "),e("p",[t._v("The system requirements to deploy PartHub are as follows:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Minimum")]),t._v(" "),e("th"),t._v(" "),e("th",[t._v("Recommended")]),t._v(" "),e("th")])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("CPU")]),t._v(" "),e("td",[t._v("2-core, 2.4 GHz")]),t._v(" "),e("td",[t._v("CPU")]),t._v(" "),e("td",[t._v("8-core, 2.9 GHz")])]),t._v(" "),e("tr",[e("td",[t._v("Memory")]),t._v(" "),e("td",[t._v("8 GB")]),t._v(" "),e("td",[t._v("Memory")]),t._v(" "),e("td",[t._v("16 GB")])]),t._v(" "),e("tr",[e("td",[t._v("Hard Drive")]),t._v(" "),e("td",[t._v("20 GB, SSD")]),t._v(" "),e("td",[t._v("Hard Drive")]),t._v(" "),e("td",[t._v("512 GB, SSD")])]),t._v(" "),e("tr",[e("td",[t._v("Network")]),t._v(" "),e("td",[t._v("Broadband Internet connection")]),t._v(" "),e("td",[t._v("Network")]),t._v(" "),e("td",[t._v("Broadband Internet connection")])])])]),t._v(" "),e("p",[t._v("Environmental requirements: Neo4j & Oracle JDK (We recommend Neo4j 4.4.11 & Oracle JDK 11.0.16). For more information, see https://neo4j.com/docs/operations-manual/current/installation/ & https://docs.oracle.com/en/java/javase/11/install/overview-jdk-installation.html. For Neo4j, please set the Username as "),e("em",[t._v("neo4j")]),t._v(" & Password as "),e("em",[t._v("igem2022")]),t._v(".")]),t._v(" "),e("ol",[e("li",[t._v("Check your JDK version in your Terminal:")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--version")]),t._v("\n")])])]),e("p",[t._v("If the JDK version is correct, the return should be:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("java 11.0.16 2022-07-19 LTS\nJava(TM) SE Runtime Environment 18.9 (build 11.0.16+11-LTS-199)\nJava HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.16+11-LTS-199, mixed mode)\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[e("p",[t._v("Download PartHub:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("git@gitlab.igem.org:2022/software-tools/fudan.git\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Replace the "),e("code",[t._v("neo4j.conf")]),t._v("  in the conf file where you install your Neo4j (e.g. /usr/local/neo4j-community-4.4.11/conf/) with that in this Repository.")])]),t._v(" "),e("li",[e("p",[t._v("Change directory to the location of the bin file of Neo4j, and run the following in your Terminal:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("screen")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-S")]),t._v(" neo4j\n")])])]),e("p",[t._v("then run the following in the "),e("code",[t._v("screen")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v("\n./neo4j console\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Press Crtl + A and then press D to detach the "),e("code",[t._v("screen")]),t._v(" session and run the following in your Terminal:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("screen")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-S")]),t._v(" web\n")])])]),e("p",[t._v("then run the following in the "),e("code",[t._v("screen")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("cd /home/ubuntu/fudan-main/\npython3 -m venv venv\nsource venv/bin/activate\npip install -r requirements.txt\npython /home/ubuntu/fudan-main/DataBase/LoadCSVFile.py\ngunicorn -b 0.0.0.0:5000 app:app\n")])])]),e("p",[t._v("where "),e("code",[t._v("/home/ubuntu/fudan-main/")]),t._v(" should be changed to the directory of your "),e("code",[t._v("fudan-main")]),t._v(" file.")])]),t._v(" "),e("li",[e("p",[t._v("Visit http://serverIP:5000/ (change serverIP to the IP of your server) and start using your PartHub!")])])]),t._v(" "),e("h2",{attrs:{id:"how-to"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to"}},[t._v("#")]),t._v(" How-to")]),t._v(" "),e("h3",{attrs:{id:"for-common-users"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#for-common-users"}},[t._v("#")]),t._v(" For common users")]),t._v(" "),e("p",[t._v("Below is an overview of PartHub's workflow.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static.igem.wiki/teams/4162/wiki/software/parthub-workflow.png",alt:"parthub-workflow.png (2125×1063) (igem.wiki)"}})]),t._v(" "),e("p",[t._v("The process of using PartHub is shown below:")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Visit PartHub, for example, http://3.238.241.161:5000/. The website is supposed to be like this:")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static.igem.wiki/teams/4162/wiki/software/homepage.gif",alt:"homepage.png (2880×1800) (igem.wiki)"}})])]),t._v(" "),e("li",[e("p",[t._v("Select the search type and enter search terms (e.g. search type is Content & search term is carotene).  The format of the search terms corresponding to different search types is as follows:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("Search type")])]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("Meaning & Format")])]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("Example")])]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("Example URL")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("ID")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("The id of the part (e.g. BBa_xxxxxxxx). It is fine to enter a search term with or without BBa_.")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("K3790012")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("http://3.238.241.161:5000/sp?s=K3790012&searchtype=number")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("The name of the part in Registry of Standard Biological Parts.")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("GFP")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("http://3.238.241.161:5000/sp?s=GFP&searchtype=name")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Sequence")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("The sequence of the part (if it exists). The search term can only be the combination of [a, t, g, c, A, T, G, C].")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("TTAACTTTAAGAAGGAG")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("http://3.238.241.161:5000/sp?s=TTAACTTTAAGAAGGAG&searchtype=sequence")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Designer")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("The name of the person who designed the part.")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Guanqiao Chi")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("http://3.238.241.161:5000/sp?s=Guanqiao%20Chi&searchtype=designer")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Team")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("The name of the team which designed the part.")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Fudan")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("http://3.238.241.161:5000/sp?s=Fudan&searchtype=team")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Content")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("The content of the part in Registry of Standard Biological Parts.")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("carotene")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("http://3.238.241.161:5000/sp?s=carotene&searchtype=contents")])])])]),t._v(" "),e("p",[t._v("Our search engine is case-insensitive and support partial match retrieval. In addition, PartHub supports boolean search with multiple search terms (The format of the boolean search with multiple search terms should be "),e("em",[t._v("xxx AND xxx or xxx OR xxx")]),t._v(").")]),t._v(" "),e("p",[e("em",[e("strong",[t._v("What's more, PartHub supports fuzzy search.")])]),t._v(" For example, if you want to search for "),e("em",[t._v("beta AND carotene")]),t._v(" but you accidentally type in "),e("em",[t._v("bata AND carotene")]),t._v(", PartHub will automatically do the fuzzy search for you and the result will be:")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static.igem.wiki/teams/4162/wiki/software/fuzzysearch.png",alt:"fuzzysearch.png (2880×1800) (igem.wiki)"}})])]),t._v(" "),e("li",[e("p",[t._v("View sorted searching results (you can choose certain sorting order). PartHub provides several ways to sort the results, like Most cited, Best match, etc. In this way, users can organize the result in order to their needs. Sorting by Recommended is a weighted sort that considers various aspects of suitability and can be used in situations where users are unsure which sort is more appropriate for their needs.")])]),t._v(" "),e("li",[e("p",[t._v("Click on a specific part you are interested in and visualize the relationship network of this part. The page is as follows:")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static.igem.wiki/teams/4162/wiki/software/graph.gif",alt:"graph.png (2880×1800) (igem.wiki)"}})]),t._v(" "),e("p",[t._v("This relationship network is interactive, you can scroll to zoom the canvas and drag to move the nodes. Click to display the part details and double click to go to the part page. You can drag nodes to change the layout of the canvas. On this page, you can also get the sequence of this part directly.")])])]),t._v(" "),e("h2",{attrs:{id:"for-developers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#for-developers"}},[t._v("#")]),t._v(" "),e("strong",[t._v("For developers")])]),t._v(" "),e("p",[e("em",[t._v("The source code is in this Repository.")])]),t._v(" "),e("ol",[e("li",[e("p",[t._v("The "),e("code",[t._v("DataBase")]),t._v(" file contains code to import data into the database.")])]),t._v(" "),e("li",[e("p",[t._v("The "),e("code",[t._v("WebCrawler")]),t._v(" file contains code to get data from the Registry of Standard Biological Parts. If you want to update the data for a new year, replace the year in "),e("a",{attrs:{href:"https://gitlab.igem.org/2022/software-tools/fudan/-/blob/main/WebCrawler/software_ver0.4.py#L679",target:"_blank",rel:"noopener noreferrer"}},[t._v("line 679"),e("OutboundLink")],1),t._v(" of "),e("code",[t._v("software_ver0.4.py")]),t._v(" with the year you want to get the data for. Then you can run "),e("code",[t._v("MergeCSVFiles.py")]),t._v(" to get the new "),e("code",[t._v("all_collections.csv")]),t._v(". Then run "),e("code",[t._v("Preprocessing.py")]),t._v(" to get "),e("code",[t._v("all_collections_filted.csv")]),t._v(". After uploading the data via "),e("code",[t._v("LoadCSVFile.py")]),t._v(", you are able to use PartHub with updated data. We recommend you to run it on a PC with more than 8 core CPUs for getting data of just one year, and on a higher performance computer for getting multiple years of data. Remember to switch the appropriate number of threads in "),e("code",[t._v("software_ver0.4.py")]),t._v(" for better performance. Our recommended configuration is as follows:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("CPUs")]),t._v(" "),e("th",[t._v("Dual Intel® Xeon E5-2680v2(10core, 20thread, 2.80 GHz to 3.60 GHz)")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Memory")]),t._v(" "),e("td",[t._v("64 GB, DDR3, 1600 MHz")])]),t._v(" "),e("tr",[e("td",[t._v("Hard Drive")]),t._v(" "),e("td",[t._v("500 GB, NVMe, SSD")])]),t._v(" "),e("tr",[e("td",[t._v("GPU")]),t._v(" "),e("td",[t._v("NVIDIA® GeForce GTX1050 Ti")])])])])]),t._v(" "),e("li",[e("p",[t._v("The back-end code of PartHub is written in Python ("),e("code",[t._v(".py")]),t._v(" files). The role of each code has been commented in the file.")])]),t._v(" "),e("li",[e("p",[t._v("The "),e("code",[t._v("static")]),t._v(" file contains static files(images and JavaScript files). The "),e("code",[t._v("templates")]),t._v(" file contains front-end HTML files.")])])]),t._v(" "),e("h2",{attrs:{id:"contributing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[t._v("#")]),t._v(" Contributing")]),t._v(" "),e("h3",{attrs:{id:"pull-requests"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pull-requests"}},[t._v("#")]),t._v(" Pull Requests")]),t._v(" "),e("p",[t._v("We actively welcome your pull requests.")]),t._v(" "),e("ol",[e("li",[t._v("Fork the repo and create your branch from "),e("code",[t._v("main")]),t._v(".")]),t._v(" "),e("li",[t._v("If you've added code that should be tested, add tests.")]),t._v(" "),e("li",[t._v("If you've changed APIs, update the documentation.")]),t._v(" "),e("li",[t._v("Ensure the test suite passes.")]),t._v(" "),e("li",[t._v("Make sure your code lints.")])]),t._v(" "),e("p",[t._v("In order to accept your pull request, please send me an "),e("a",{attrs:{href:"mailto:20301050198@fudan.edu.cn"}},[t._v("email")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"issues"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#issues"}},[t._v("#")]),t._v(" Issues")]),t._v(" "),e("p",[t._v("We use GitLab issues to track bugs. Please describe your isuee clearly and give sufficient instructions to reproduce the issue.")]),t._v(" "),e("h2",{attrs:{id:"authors-and-acknowledgment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#authors-and-acknowledgment"}},[t._v("#")]),t._v(" Authors and acknowledgment")]),t._v(" "),e("h3",{attrs:{id:"authors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#authors"}},[t._v("#")]),t._v(" Authors")]),t._v(" "),e("ul",[e("li",[t._v("Zhiyue Chen ("),e("a",{attrs:{href:"https://gitlab.igem.org/mistyfield",target:"_blank",rel:"noopener noreferrer"}},[t._v("@mistyfield"),e("OutboundLink")],1),t._v(")")]),t._v(" "),e("li",[t._v("Yunjia Liu ("),e("a",{attrs:{href:"https://gitlab.igem.org/VeronicaLiu",target:"_blank",rel:"noopener noreferrer"}},[t._v("@VeronicaLiu"),e("OutboundLink")],1),t._v(")")])]),t._v(" "),e("h3",{attrs:{id:"acknowledgment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgment"}},[t._v("#")]),t._v(" Acknowledgment")]),t._v(" "),e("ul",[e("li",[t._v("Sunzhe Kang ("),e("a",{attrs:{href:"https://gitlab.igem.org/KangSunzhe",target:"_blank",rel:"noopener noreferrer"}},[t._v("@KangSunzhe"),e("OutboundLink")],1),t._v(")")]),t._v(" "),e("li",[t._v("Shitao Gong  ("),e("a",{attrs:{href:"https://gitlab.igem.org/Tom_GhoST_Smith",target:"_blank",rel:"noopener noreferrer"}},[t._v("@Tom_GhoST_Smith"),e("OutboundLink")],1),t._v("), and 2021's "),e("a",{attrs:{href:"https://2021.igem.org/Team:Fudan/Software",target:"_blank",rel:"noopener noreferrer"}},[t._v("Part Camera"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);