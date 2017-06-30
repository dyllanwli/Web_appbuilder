// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/Screening/setting/nls/strings":{units:{standardUnit:"Standaardeenheid",metricUnit:"Metrische eenheid"},analysisTab:{analysisTabLabel:"Analyse",selectAnalysisLayerLabel:"Analyselagen selecteren",addLayerLabel:"Lagen toevoegen",noValidLayersForAnalysis:"Geen geldige lagen gevonden in de geselecteerde webmap.",noValidFieldsForAnalysis:"Geen geldige velden gevonden in de geselecteerde webmap. Verwijder de geselecteerde laag.",addLayersHintText:"Hint: Selecteer lagen en velden om te analyseren en weer te geven in het rapport",
addLayerNameTitle:"Laagnaam",addFieldsLabel:"Veld toevoegen",addFieldsPopupTitle:"Velden selecteren",addFieldsNameTitle:"Veldnamen",aoiToolsLegendLabel:"AOI-tools",aoiToolsDescriptionLabel:"Schakel tools in om interessegebieden te maken en hun labels te specificeren",placenameLabel:"Plaatsnaam",drawToolsLabel:"Tekentools",uploadShapeFileLabel:"Een shapefile uploaden",coordinatesLabel:"Co\u00f6rdinaten",coordinatesDrpDwnHintText:"Hint: Selecteer eenheid om ingevoerde doorkruisingen weer te geven",
coordinatesBearingDrpDwnHintText:"Hint: Selecteer richting om ingevoerde doorkruisingen weer te geven",allowShapefilesUploadLabel:"Uploaden shapefiles voor analyse toestaan",areaUnitsLabel:"Gebieden/lengten weergeven in",allowShapefilesUploadLabelHintText:"Hint: Toon 'Shapefile uploaden in analyse' in tabblad Rapport",maxFeatureForAnalysisLabel:"Max. objecten voor analyse",maxFeatureForAnalysisHintText:"Hint: Stel het maximum aantal objecten voor analyse in",searchToleranceLabelText:"Zoektolerantie (voet)",
searchToleranceHint:"Hint : De zoektolerantie wordt alleen gebruikt bij analyse van punt- en lijninputs"},downloadTab:{downloadLegend:"Downloadinstellingen",reportLegend:"Rapportinstellingen",downloadTabLabel:"Downloaden",syncEnableOptionLabel:"Objectlagen",syncEnableOptionHint:"Hint: Wordt gebruikt om objectinformatie te downloaden voor objecten die het interessegebied doorkruisen in de opgegeven indelingen.",syncEnableOptionNote:"Opmerking:featureservices met synchronisatie ingeschakeld zijn vereist voor de File Geodatabase-optie.",
extractDataTaskOptionLabel:"Datataak extraheren geoprocessingservice",extractDataTaskOptionHint:"Hint: Gebruik een gepubliceerde Datataak extraheren geoprocessingservice om objecten te downloaden die het interessegebied doorkruisen  in File Geodatabase- of Shapefile-indelingen.",cannotDownloadOptionLabel:"Downloaden uitschakelen",syncEnableTableHeaderTitle:{layerNameLabel:"Kaartlaagnaam",csvFileFormatLabel:"CSV",fileGDBFormatLabel:"File geodatabase",allowDownloadLabel:"Downloaden toestaan"},setButtonLabel:"Instellen",
GPTaskLabel:"Specificeer URL naar geoprocessingservice",printGPServiceLabel:"Afdrukservice-URL",setGPTaskTitle:"Specificeer vereiste geoprocessingservice-URL",logoLabel:"Logo",logoChooserHint:"Hint: klik op het afbeeldingspictogram om de afbeelding te wijzigen",footnoteLabel:"Voetnoot",columnTitleColorPickerLabel:"Kleur voor kolomtiles",reportTitleLabel:"Rapportnaam",errorMessages:{invalidGPTaskURL:"Ongeldige geoprocessingservice. Selecteer een geoprocessingservice die Datataak extraheren bevat.",
noExtractDataTaskURL:"Selecteer een geoprocessingservice die Datataak extraheren bevat."}},generalTab:{generalTabLabel:"Algemeen",tabLabelsLegend:"Deelvensterlabels",tabLabelsHint:"Hint: Specificeer labels",AOITabLabel:"Interessegebied-deelvenster",ReportTabLabel:"Rapportdeelvenster",bufferSettingsLegend:"Bufferinstellingen",defaultBufferDistanceLabel:"Standaard bufferafstand",defaultBufferUnitsLabel:"Buffereenheden",generalBufferSymbologyHint:"Hint: Stel symbologie in om te gebruiken voor weergave van buffers rond gedefinieerde interessegebieden",
aoiGraphicsSymbologyLegend:"Symbologie AOI Grafische gegevens",aoiGraphicsSymbologyHint:"Hint: Stel symbologie in om te gebruiken bij bepaling van punt-, lijn- en polygooninteressegebieden",pointSymbologyLabel:"Punt",previewLabel:"Voorbeeld",lineSymbologyLabel:"Lijn",polygonSymbologyLabel:"Vlak",aoiBufferSymbologyLabel:"Buffersymbologie",pointSymbolChooserPopupTitle:"Adres of locatiesymbool",polygonSymbolChooserPopupTitle:"Selecteer symbool om polygoon te arceren",lineSymbolChooserPopupTitle:"Selecteer symbool om lijn te arceren",
aoiSymbolChooserPopupTitle:"Stel het symbool van de buffer in"},searchSourceSetting:{searchSourceSettingTabTitle:"Broninstellingen zoeken",searchSourceSettingTitle:"Broninstellingen zoeken",searchSourceSettingTitleHintText:"Geocodeerservices of objectlagen toevoegen en configureren als zoekbronnen. Deze gespecificeerde bronnen bepalen wat doorzoekbaar is in het zoekvak.",addSearchSourceLabel:"Zoekbron toevoegen",featureLayerLabel:"Objectlaag",geocoderLabel:"Geocoder",generalSettingLabel:"Algemene instelling",
allPlaceholderLabel:"Plaatshoudertekst om alles te zoeken:",allPlaceholderHintText:"Hint: Voer tekst in die moet worden getoond als plaatshouder tijdens het zoeken door alle lagen en geocoder",generalSettingCheckboxLabel:"Pop-up weergeven voor gevonden object of locatie",countryCode:"Land- of regiocode(s)",countryCodeEg:"bijv. ",countryCodeHint:"Laat deze waarde leeg en alle landen en regio's worden gezocht",questionMark:"?",searchInCurrentMapExtent:"Alleen zoeken in huidige kaartextent",zoomScale:"Schaal voor in-/uitzoomen",
locatorUrl:"Geocoder-URL",locatorName:"Naam van geocoder",locatorExample:"Voorbeeld",locatorWarning:"Deze versie van geocodeerservice wordt niet ondersteund. De widget ondersteunt geocodeerservice 10.0 en hoger.",locatorTips:"Suggesties zijn niet beschikbaar omdat de geocodeerservice geen suggesties ondersteunt.",layerSource:"Laagbron",setLayerSource:"Laagbron instellen",setGeocoderURL:"Geocoder-URL instellen",searchLayerTips:"Suggesties zijn niet beschikbaar omdat de feautureservice geen pagination ondersteunt.",
placeholder:"Tekst van tijdelijke aanduiding",searchFields:"Zoekvelden",displayField:"Weergaveveld:",exactMatch:"Exacte overeenkomst",maxSuggestions:"Maximale suggesties",maxResults:"Maximale resultaten",enableLocalSearch:"Lokaal zoeken inschakelen",minScale:"Min.schaal",minScaleHint:"Als de kaartschaal groter is dan deze schaal, dan zal lokaal zoeken toegepast worden",radius:"Straal",radiusHint:"Bepaalt de straal van een gebied rond het midden van de huidige kaart, die gebruikt wordt om de rangorde van geocoding-kandidaten te versterken zodat kandidaten die het dichtst in de buurt zijn eerst weergegeven worden",
setSearchFields:"Zoekvelden instellen",set:"Instellen",invalidUrlTip:"De URL ${URL} is ongeldig of ontoegankelijk.",invalidSearchSources:"Ongeldige instellingen zoekbron"},errorMsg:{textboxFieldsEmptyErrorMsg:"Vul de vereiste velden in",bufferDistanceFieldsErrorMsg:"Voer geldige waarden in",invalidSearchToleranceErrorMsg:"Voer een geldige waarde voor zoektolerantie in",atLeastOneCheckboxCheckedErrorMsg:"Ongeldige configuratie",noLayerAvailableErrorMsg:"Geen lagen beschikbaar",layerNotSupportedErrorMsg:"Niet ondersteund ",
noFieldSelected:"Gebruik Bewerken om velden te selecteren voor analyse.",duplicateFieldsLabels:'Dubbel label "${labelText}" toegevoegd voor: "${itemNames}"',noLayerSelected:"Selecteer ten minste \u00e9\u00e9n laag voor analyse",errorInSelectingLayer:"Kan de laagselectie niet voltooien. Probeer het nogmaals.",errorInMaxFeatureCount:"Voer een geldige maximumwaarde in voor objecten voor analyse."},_localized:{}}});