define(['exports'], (function(e){"use strict";const t={accAnnounceMovedKey:e=>e.itemKey+" "+e.position+" "+e.referenceKey+" verplaatst.",accButtonProgressComplete:e=>e.label+" actie voltooid.",accButtonProgressStatus:e=>e.label+" actie in uitvoering.",accCommandKey:()=>"Opdracht",accControlKey:()=>"Sluiten",accPositionAfter:()=>"na",accPositionBefore:()=>"voor",accReorderInstructions:e=>"Houd "+e.keyPressed+" samen ingedrukt met de Shift-toetsen en gebruik vervolgens de pijltoetsen om de volgorde aan te passen.",calendarDateConverter_parseError:e=>"Voer een volledige datum als deze: "+e.dateExample+".",calendarMonthConverter_parseError:e=>"Voer een maand en jaar in als deze "+e.dateExample+".",chart_labelGroup:()=>"Groep",chart_labelSeries:()=>"Reeks",chart_labelValue:()=>"Waarde",chart_labelX:()=>"X",chart_labelY:()=>"Y",checkboxSet_requiredMessageDetail:()=>"Vereist",checkbox_requiredMessageDetail:()=>"Vereist",close:()=>"Sluiten",collection_loading:()=>"Bezig met laden",collection_noData:()=>"Er zijn geen gegevens om weer te geven.",collection_selectAllRows:()=>"Alle rijen selecteren",collection_selectRow:e=>"Rij "+e.ROW_NAME+" selecteren",collection_sortDisabled:()=>"Niet sorteerbaar",collection_sortEnabled:()=>"Sorteerbaar",confirmation:()=>"Bevestiging",datePicker_currentDate:()=>"Huidige datum",datePicker_goToToday:()=>"Naar vandaag",datePicker_label:()=>"Datumkiezer",datePicker_month:()=>"Maand",datePicker_months:()=>"Maanden",datePicker_next:()=>"Volgende",datePicker_nextDecade:()=>"Volgend decennium",datePicker_nextMonth:()=>"Volgende maand",datePicker_prev:()=>"Vorige",datePicker_prevDecade:()=>"Vorig decennium",datePicker_prevMonth:()=>"Vorige maand",datePicker_restricted:()=>"Beperkt",datePicker_selected:()=>"Geselecteerd",datePicker_today:()=>"Vandaag",datePicker_weekNum:e=>"Week "+e.NUM,datePicker_weekNumColLabel:()=>"Weeknummer",datePicker_year:()=>"Jaar",datePicker_years:()=>"Jaar",error:()=>"Fout",expandableList_expandCollapseInstructionText:()=>"Gebruik de pijltoetsen om uit te vouwen en samen te vouwen",expandableList_groupCollapse:()=>"Samengevouwen",expandableList_groupExpand:()=>"Uitgevouwen",filePicker_addFiles:()=>"Bestanden toevoegen",filePicker_dropzonePrimaryText:()=>"Slepen en neerzetten",filePicker_dropzoneSecondaryText:()=>"Selecteer een bestand of zet er een hier neer.",filePicker_dropzoneSecondaryTextMultiple:()=>"Selecteer bestanden of zet deze hier neer.",filePicker_multipleFileTypeUploadError:e=>"U kunt geen bestanden uploaden van dit type: "+e.fileTypes,filePicker_singleFileUploadError:()=>"Upload één bestand per keer",filePicker_singleTypeUploadError:e=>"U kunt geen bestanden uploaden van het type "+e.fileType,filePicker_unknownFileTypeUploadError:()=>"onbekend",formControl_clear:()=>"Wissen",formControl_day:()=>"Dag",formControl_empty_segment:()=>"Leeg",formControl_helpAvailable:()=>"Help beschikbaar",formControl_hide:()=>"Verbergen",formControl_hour:()=>"Uur",formControl_limitReached:e=>"U hebt de limiet "+({one:new Intl.NumberFormat("nl").format(e.CHARACTER_LIMIT)+"-character"}[new Intl.PluralRules("nl").select(e.CHARACTER_LIMIT)]||new Intl.NumberFormat("nl").format(e.CHARACTER_LIMIT)+"-character")+" bereikt.",formControl_loading:()=>"Bezig met laden",formControl_maxLength:e=>"U kunt maximaal "+e.MAX_LENGTH+" tekens invoeren.",formControl_maxLengthRemaining:e=>e.CHARACTER_COUNT+" tekens over",formControl_millisecond:()=>"Milliseconde",formControl_minute:()=>"Minuut",formControl_month:()=>"Maand",formControl_readOnly:()=>"Alleen lezen",formControl_requiredMessageDetail:()=>"Voer een waarde in.",formControl_second:()=>"Seconde",formControl_show:()=>"Tonen",formControl_year:()=>"Jaar",gantt_labelDate:()=>"Datum",gantt_labelEnd:()=>"Einde",gantt_labelLabel:()=>"Label",gantt_labelRow:()=>"Rij",gantt_labelStart:()=>"Begin",indexer_disabledLabel:e=>e.SECTION+". Geen overeenkomende sectie gevonden.",indexer_keyboardInstructionText:()=>"Druk op Enter om waarde te selecteren.",indexer_othersLabel:()=>"#",indexer_separatorLabel:e=>"Tussen "+e.FROM_SECTION+" en "+e.TO_SECTION+".",indexer_touchInstructionText:()=>"Dubbeltik en houd vast om gebarenmodus te activeren. Sleep vervolgens omhoog of omlaag om waarde aan te passen.",info:()=>"Informatie",inputDateMask_date_cleared:()=>"Datum gewist",inputDateMask_dayPlaceholder:()=>"dd",inputDateMask_empty_segment:()=>"Leeg",inputDateMask_monthPlaceholder:()=>"mm",inputDateMask_yearPlaceholder:()=>"jjjj",inputDatePicker_dateRangeOverflowMessageDetail:e=>"Voer een datum op of voor "+e.max+" in.",inputDatePicker_dateRangeUnderflowMessageDetail:e=>"Voer een datum op of na "+e.min+" in.",inputDatePicker_dateRestrictionMessageDetail:()=>"Voer een geldige datum in.",inputDatePicker_instruction:()=>"Klik op Tab om de kalender te openen.",inputDatePicker_selectDate:()=>"Selecteer een datum",inputMonthMask_dateRangeOverflowMessageDetail:e=>"Voer een maand en jaar op of voor "+e.max+" in.",inputMonthMask_dateRangeUnderflowMessageDetail:e=>"Voer een maand en jaar op of na "+e.min+" in.",inputNumber_converterParseError:()=>"Voer een getal in.",inputNumber_decrease:()=>"Verkleinen",inputNumber_increase:()=>"Vergroten",inputPassword_hidden:()=>"Wachtwoord verborgen",inputPassword_hide:()=>"Wachtwoord verbergen",inputPassword_show:()=>"Wachtwoord tonen",inputSensitiveText_hidden:()=>"Gevoelige tekst verborgen.",inputTimeMask_time_cleared:()=>"Tijd gewist.",list_msgFetchCompleted:()=>"Geladen",list_msgFetchingData:()=>"Bezig met laden",list_suggestion:()=>"Suggestie",messageToast_allMessagesClosed:()=>"Alle toastmeldingen zijn gesloten.",message_close:()=>"Sluiten",message_confirmation:()=>"Gelukt",message_error:()=>"Fout",message_info:()=>"Informatie",message_navigationFromMessagesRegion:()=>"Berichtenregio wordt geopend. Druk op F6 om terug te navigeren naar het element dat hiervoor de focus had.",message_navigationToMessagesRegion:()=>"Berichtenregio bevat nieuwe berichten. Druk op F6 om naar de regio met de laatste berichten te gaan.",message_warning:()=>"Waarschuwing",noData_message:()=>"Geen items om weer te geven",overflowItemLabel:()=>"Meer tabbladen",plural_separator:()=>", ",progressIndeterminate:()=>"In uitvoering",radio_helpForRadio:()=>"Help voor keuzerondje",radio_requiredMessageDetail:()=>"Selecteer een waarde.",selectMultiple_apply:()=>"Toepassen",selectMultiple_back:()=>"Terug",selectMultiple_countPlus:e=>e.COUNT+"+",selectMultiple_highlightSelectedTagsInstructionText:()=>"Gebruik toetsen met pijlen naar links en rechts om geselecteerde waarden te markeren.",selectMultiple_removeSelectedTagInstructionText:()=>"Klik op 'Backspace' of 'Delete' om de geselecteerd waarde te verwijderen.",selectMultiple_selectedValues:()=>"Geselecteerde waarden",selectMultiple_showSelectedValues:()=>"Alleen geselecteerde waarden tonen",selectMultiple_valuesSelected:e=>e.VALUE_COUNT+" geselecteerde waarden",select_addToList:()=>"Toevoegen aan lijst",select_addToListAvailable:()=>"Toevoegen aan lijst beschikbaar",select_moreSearchOptions:()=>"Meer zoekopties",select_moreSearchOptionsAvailable:()=>"Meer zoekopties beschikbaar",select_noMatchesFound:()=>"Geen treffers gevonden.",select_oneMatchFound:()=>"Eén match gevonden.",select_requiredMessageDetail:()=>"Selecteer een waarde.",select_sizeMatchesFound:e=>e.TOTAL_SIZE+" matches gevonden",select_sizeOrMoreMatchesFound:e=>e.TOTAL_SIZE+" of meer matches gevonden",selectorAll_deselectAll:()=>"Alles deselecteren",selectorAll_selectAll:()=>"Alles selecteren",selector_selected:()=>"Selectievakje ingeschakeld",selector_unselected:()=>"Selectievakje niet ingeschakeld",tabBarNavigationList_removeCueText:()=>"Verwijderbaar",timeComponent_tooltipZoomIn:()=>"Inzoomen",timeComponent_tooltipZoomOut:()=>"Uitzoomen",train_current:()=>"Huidig",train_message_type:()=>"Berichttype",train_not_visited:()=>"Niet bezocht",train_status:e=>"Stap "+e.currentStep+" van "+e.numberOfSteps,train_visited:()=>"Bezocht",userAssistance_learnMore:()=>"Meer info",userAssistance_required:()=>"Vereist",vis_clearSelection:()=>"Selectie wissen",vis_drillable:()=>"Inzoombaar",vis_labelAndValue:e=>e.LABEL+": "+e.VALUE,vis_labelCountWithTotal:e=>e.itemCount+" van de "+e.totalCount,vis_marqueeSelectTooltip:()=>"Selecteren marquee",vis_marqueeZoomTooltip:()=>"Zoomen marquee",vis_noData:()=>"Er zijn geen gegevens om weer te geven.",vis_panTooltip:()=>"Pannen",vis_stateLoaded:()=>"Geladen",vis_stateLoading:()=>"Bezig met laden",vis_stateSelected:()=>"Geselecteerd",vis_stateUnselected:()=>"Niet geselecteerd",warn:()=>"Waarschuwing"};e.default=t,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=bundle.js.map
