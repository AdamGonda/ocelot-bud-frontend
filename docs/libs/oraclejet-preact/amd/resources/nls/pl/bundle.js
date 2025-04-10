define(['exports'], (function(e){"use strict";const a={accAnnounceMovedKey:e=>"Przeniesiono: "+e.itemKey+" "+e.position+" "+e.referenceKey+".",accButtonProgressComplete:e=>'Czynność "'+e.label+'" ukończona',accButtonProgressStatus:e=>'Czynność "'+e.label+'" w toku',accCommandKey:()=>"Polecenie",accControlKey:()=>"Zamknij",accPositionAfter:()=>"po",accPositionBefore:()=>"przed",accReorderInstructions:e=>"Aby zmienić kolejność, należy nacisnąć i przytrzymać przyciski "+e.keyPressed+" i Shift, a następnie użyć przycisków strzałek.",calendarDateConverter_parseError:e=>"Należy wprowadzić pełną datę, używając formatu podobnego do następującego: "+e.dateExample+".",calendarMonthConverter_parseError:e=>"Należy wprowadzić miesiąc i rok, używając formatu podobnego do następującego: "+e.dateExample+".",chart_labelGroup:()=>"Grupa",chart_labelSeries:()=>"Seria",chart_labelValue:()=>"Wartość",chart_labelX:()=>"X",chart_labelY:()=>"Y",checkboxSet_requiredMessageDetail:()=>"Wymagane",checkbox_requiredMessageDetail:()=>"Wymagane",close:()=>"Zamknij",collection_loading:()=>"Ładowanie",collection_noData:()=>"Brak danych do wyświetlenia.",collection_selectAllRows:()=>"Wybór wszystkich wierszy",collection_selectRow:e=>'Wybór wiersza "'+e.ROW_NAME+'"',collection_sortDisabled:()=>"Niesortowalne",collection_sortEnabled:()=>"Sortowalne",confirmation:()=>"Potwierdzenie",datePicker_currentDate:()=>"Data bieżąca",datePicker_goToToday:()=>"Przejdź do dnia dzisiejszego",datePicker_label:()=>"Selektor daty",datePicker_month:()=>"Miesiąc",datePicker_months:()=>"Miesiące",datePicker_next:()=>"Następne",datePicker_nextDecade:()=>"Następna dekada",datePicker_nextMonth:()=>"Następny miesiąc",datePicker_prev:()=>"Poprzednie",datePicker_prevDecade:()=>"Poprzednia dekada",datePicker_prevMonth:()=>"Poprzedni miesiąc",datePicker_restricted:()=>"Ograniczone",datePicker_selected:()=>"Wybrane",datePicker_today:()=>"Dzisiaj",datePicker_weekNum:e=>"Tydzień "+e.NUM,datePicker_weekNumColLabel:()=>"Numer tygodnia",datePicker_year:()=>"Rok",datePicker_years:()=>"Lata",error:()=>"Błąd",expandableList_expandCollapseInstructionText:()=>"Do rozwijania i zwijania proszę używać klawiszy ze strzałkami",expandableList_groupCollapse:()=>"Zwinięte",expandableList_groupExpand:()=>"Rozwinięte",filePicker_addFiles:()=>"Dodaj pliki",filePicker_dropzonePrimaryText:()=>"Przeciąganie i upuszczanie",filePicker_dropzoneSecondaryText:()=>"Proszę wybrać plik lub go tutaj przeciągnąć",filePicker_dropzoneSecondaryTextMultiple:()=>"Proszę wybrać pliki lub je tutaj przeciągnąć",filePicker_multipleFileTypeUploadError:e=>"Nie można wysłać plików typu "+e.fileTypes,filePicker_singleFileUploadError:()=>"Proszę wysyłać po jednym pliku",filePicker_singleTypeUploadError:e=>"Nie można wysłać plików typu "+e.fileType,filePicker_unknownFileTypeUploadError:()=>"nieznany",formControl_clear:()=>"Wyczyść",formControl_day:()=>"Dzień",formControl_empty_segment:()=>"Pusty",formControl_helpAvailable:()=>"Pomoc dostępna",formControl_hide:()=>"Ukryj",formControl_hour:()=>"Godzina",formControl_limitReached:e=>"Osiągnięto limit wynoszący "+({one:new Intl.NumberFormat("pl").format(e.CHARACTER_LIMIT)+" znak",few:new Intl.NumberFormat("pl").format(e.CHARACTER_LIMIT)+" znaki",many:new Intl.NumberFormat("pl").format(e.CHARACTER_LIMIT)+" znaków"}[new Intl.PluralRules("pl").select(e.CHARACTER_LIMIT)]||new Intl.NumberFormat("pl").format(e.CHARACTER_LIMIT)+" znaku")+".",formControl_loading:()=>"Ładowanie",formControl_maxLength:e=>"Można wprowadzić maksymalnie następującą liczbę znaków: "+e.MAX_LENGTH+".",formControl_maxLengthRemaining:e=>"Pozostało znaków: "+e.CHARACTER_COUNT+".",formControl_millisecond:()=>"Milisekunda",formControl_minute:()=>"Minuta",formControl_month:()=>"Miesiąc",formControl_readOnly:()=>"Tylko do odczytu",formControl_requiredMessageDetail:()=>"Proszę wprowadzić wartość.",formControl_second:()=>"Sekunda",formControl_show:()=>"Pokaż",formControl_year:()=>"Rok",gantt_labelDate:()=>"Data",gantt_labelEnd:()=>"Koniec",gantt_labelLabel:()=>"Etykieta",gantt_labelRow:()=>"Wiersz",gantt_labelStart:()=>"Początek",indexer_disabledLabel:e=>e.SECTION+". Nie znaleziono zgodnej sekcji.",indexer_keyboardInstructionText:()=>"Aby wybrać wartość, proszę nacisnąć klawisz Enter.",indexer_othersLabel:()=>"#",indexer_separatorLabel:e=>"Między "+e.FROM_SECTION+" a "+e.TO_SECTION+".",indexer_touchInstructionText:()=>"Aby przełączyć się do trybu gestów, proszę 2x stuknąć i przytrzymać, a następnie - aby dostosować wartość - przeciągnąć w górę lub w dół.",info:()=>"Informacja",inputDateMask_date_cleared:()=>"Data wyczyszczenia",inputDateMask_dayPlaceholder:()=>"dd",inputDateMask_empty_segment:()=>"Pusty",inputDateMask_monthPlaceholder:()=>"mm",inputDateMask_yearPlaceholder:()=>"rrrr",inputDatePicker_dateRangeOverflowMessageDetail:e=>"Należy wprowadzić datę "+e.max+" lub wcześniejszą.",inputDatePicker_dateRangeUnderflowMessageDetail:e=>"Należy wprowadzić datę "+e.min+" lub późniejszą.",inputDatePicker_dateRestrictionMessageDetail:()=>"Należy wprowadzić dostępną datę.",inputDatePicker_instruction:()=>"Aby uzyskać dostęp do kalendarza, należy nacisnąć klawisz Tab.",inputDatePicker_selectDate:()=>"Proszę wybrać datę",inputMonthMask_dateRangeOverflowMessageDetail:e=>"Należy wprowadzić miesiąc i rok przypadający na "+e.max+" lub wcześniejszy.",inputMonthMask_dateRangeUnderflowMessageDetail:e=>"Należy wprowadzić miesiąc i rok przypadający na "+e.min+" lub późniejszy.",inputNumber_converterParseError:()=>"Proszę wprowadzić liczbę.",inputNumber_decrease:()=>"Zmniejsz",inputNumber_increase:()=>"Zwiększ",inputPassword_hidden:()=>"Hasło ukryte",inputPassword_hide:()=>"Ukryj hasło",inputPassword_show:()=>"Pokaż hasło",inputSensitiveText_hidden:()=>"Tekst danych wrażliwych ukryty",inputTimeMask_time_cleared:()=>"Czas wyczyszczenia",list_msgFetchCompleted:()=>"Załadowano",list_msgFetchingData:()=>"Ładowanie",list_suggestion:()=>"Sugestia",messageToast_allMessagesClosed:()=>"Wszystkie wyskakujące powiadomienia są zamknięte.",message_close:()=>"Zamknij",message_confirmation:()=>"Powodzenie",message_error:()=>"Błąd",message_info:()=>"Informacja",message_navigationFromMessagesRegion:()=>"Wchodzenie do obszaru komunikatów. Aby się cofnąć do elementu, na którym znajdował się fokus, proszę nacisnąć klawisz F6.",message_navigationToMessagesRegion:()=>"W obszarze komunikatów są nowe komunikaty. Aby przejść do nich, proszę nacisnąć klawisz F6.",message_warning:()=>"Ostrzeżenie",noData_message:()=>"Brak elementów do wyświetlenia",overflowItemLabel:()=>"Więcej kart",plural_separator:()=>", ",progressIndeterminate:()=>"W toku",radio_helpForRadio:()=>"Pomoc dot. przycisku radiowego",radio_requiredMessageDetail:()=>"Proszę wybrać wartość.",selectMultiple_apply:()=>"Zastosuj",selectMultiple_back:()=>"Wstecz",selectMultiple_countPlus:e=>e.COUNT+"+",selectMultiple_highlightSelectedTagsInstructionText:()=>"Aby wyróżnić wybrane wartości, należy użyć klawiszy ze strzałką w lewo lub w prawo.",selectMultiple_removeSelectedTagInstructionText:()=>"Aby usunąć wybraną wartość, proszę nacisnąć klawisz Backspace lub Delete",selectMultiple_selectedValues:()=>"Wybrane wartości",selectMultiple_showSelectedValues:()=>"Pokaż tylko wybrane wartości.",selectMultiple_valuesSelected:e=>e.VALUE_COUNT+" wybrane wartości.",select_addToList:()=>"Dodaj do listy",select_addToListAvailable:()=>"Dodaj do listy (dostępne)",select_moreSearchOptions:()=>"Więcej opcji wyszukiwania",select_moreSearchOptionsAvailable:()=>"Więcej opcji wyszukiwania (dostępne)",select_noMatchesFound:()=>"Nie znaleziono zgodnych.",select_oneMatchFound:()=>"Znaleziono zgodnych: 1",select_requiredMessageDetail:()=>"Proszę wybrać wartość.",select_sizeMatchesFound:e=>"Znaleziono zgodnych: "+e.TOTAL_SIZE,select_sizeOrMoreMatchesFound:e=>"Znaleziono zgodnych: "+e.TOTAL_SIZE+" lub więcej",selectorAll_deselectAll:()=>"Cofnij wybór wszystkich",selectorAll_selectAll:()=>"Wybierz wszystkie",selector_selected:()=>"Pole wyboru zaznaczone",selector_unselected:()=>"Pole wyboru niezaznaczone",tabBarNavigationList_removeCueText:()=>"Możliwe do usunięcia",timeComponent_tooltipZoomIn:()=>"Powiększ",timeComponent_tooltipZoomOut:()=>"Pomniejsz",train_current:()=>"Bieżące",train_message_type:()=>"Typ wiadomości",train_not_visited:()=>"Nieodwiedzone",train_status:e=>"Etap "+e.currentStep+" z "+e.numberOfSteps,train_visited:()=>"Odwiedzone",userAssistance_learnMore:()=>"Dalsze informacje",userAssistance_required:()=>"Wymagane",vis_clearSelection:()=>"Wyczyść wybór",vis_drillable:()=>"Możliwe do drążenia",vis_labelAndValue:e=>e.LABEL+": "+e.VALUE,vis_labelCountWithTotal:e=>e.itemCount+" z "+e.totalCount,vis_marqueeSelectTooltip:()=>"Zaznaczanie obszaru",vis_marqueeZoomTooltip:()=>"Powiększanie obszaru",vis_noData:()=>"Brak danych do wyświetlenia",vis_panTooltip:()=>"Panoramowanie",vis_stateLoaded:()=>"Załadowano",vis_stateLoading:()=>"Ładowanie",vis_stateSelected:()=>"Wybrane",vis_stateUnselected:()=>"Niewybrane",warn:()=>"Ostrzeżenie"};e.default=a,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=bundle.js.map
