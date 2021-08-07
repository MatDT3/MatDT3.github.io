var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Btiments_DEET_VdB_1 = new ol.format.GeoJSON();
var features_Btiments_DEET_VdB_1 = format_Btiments_DEET_VdB_1.readFeatures(json_Btiments_DEET_VdB_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Btiments_DEET_VdB_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Btiments_DEET_VdB_1.addFeatures(features_Btiments_DEET_VdB_1);
var lyr_Btiments_DEET_VdB_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Btiments_DEET_VdB_1, 
                style: style_Btiments_DEET_VdB_1,
                interactive: true,
                title: '<img src="styles/legend/Btiments_DEET_VdB_1.png" /> Bâtiments_DEET_VdB'
            });
var format_Btiments_B_DEET_2 = new ol.format.GeoJSON();
var features_Btiments_B_DEET_2 = format_Btiments_B_DEET_2.readFeatures(json_Btiments_B_DEET_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Btiments_B_DEET_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Btiments_B_DEET_2.addFeatures(features_Btiments_B_DEET_2);
var lyr_Btiments_B_DEET_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Btiments_B_DEET_2, 
                style: style_Btiments_B_DEET_2,
                interactive: true,
                title: '<img src="styles/legend/Btiments_B_DEET_2.png" /> Bâtiments_B+_DEET'
            });
var format_Btiments_CCAS_DEET_3 = new ol.format.GeoJSON();
var features_Btiments_CCAS_DEET_3 = format_Btiments_CCAS_DEET_3.readFeatures(json_Btiments_CCAS_DEET_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Btiments_CCAS_DEET_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Btiments_CCAS_DEET_3.addFeatures(features_Btiments_CCAS_DEET_3);
var lyr_Btiments_CCAS_DEET_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Btiments_CCAS_DEET_3, 
                style: style_Btiments_CCAS_DEET_3,
                interactive: true,
                title: '<img src="styles/legend/Btiments_CCAS_DEET_3.png" /> Bâtiments_CCAS_DEET'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Btiments_DEET_VdB_1.setVisible(true);lyr_Btiments_B_DEET_2.setVisible(true);lyr_Btiments_CCAS_DEET_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Btiments_DEET_VdB_1,lyr_Btiments_B_DEET_2,lyr_Btiments_CCAS_DEET_3];
lyr_Btiments_DEET_VdB_1.set('fieldAliases', {'ORIGIN_BAT': 'ORIGIN_BAT', 'Bâtiment': 'Bâtiment', 'Surface': 'Surface', 'Code NAF': 'Code NAF', 'Parcelle': 'Parcelle', });
lyr_Btiments_B_DEET_2.set('fieldAliases', {'ORIGIN_BAT': 'ORIGIN_BAT', 'Bâtiment': 'Bâtiment', 'Surface': 'Surface', 'Code NAF': 'Code NAF', 'Parcelle': 'Parcelle', });
lyr_Btiments_CCAS_DEET_3.set('fieldAliases', {'ORIGIN_BAT': 'ORIGIN_BAT', 'Bâtiment': 'Bâtiment', 'Surface': 'Surface', 'Code NAF': 'Code NAF', 'Parcelle': 'Parcelle', });
lyr_Btiments_DEET_VdB_1.set('fieldImages', {'ORIGIN_BAT': '', 'Bâtiment': '', 'Surface': '', 'Code NAF': '', 'Parcelle': '', });
lyr_Btiments_B_DEET_2.set('fieldImages', {'ORIGIN_BAT': '', 'Bâtiment': '', 'Surface': '', 'Code NAF': '', 'Parcelle': '', });
lyr_Btiments_CCAS_DEET_3.set('fieldImages', {'ORIGIN_BAT': '', 'Bâtiment': '', 'Surface': '', 'Code NAF': '', 'Parcelle': '', });
lyr_Btiments_DEET_VdB_1.set('fieldLabels', {'ORIGIN_BAT': 'header label', 'Bâtiment': 'header label', 'Surface': 'header label', 'Code NAF': 'header label', 'Parcelle': 'header label', });
lyr_Btiments_B_DEET_2.set('fieldLabels', {'ORIGIN_BAT': 'header label', 'Bâtiment': 'header label', 'Surface': 'header label', 'Code NAF': 'header label', 'Parcelle': 'header label', });
lyr_Btiments_CCAS_DEET_3.set('fieldLabels', {'ORIGIN_BAT': 'header label', 'Bâtiment': 'header label', 'Surface': 'header label', 'Code NAF': 'header label', 'Parcelle': 'header label', });
lyr_Btiments_CCAS_DEET_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});