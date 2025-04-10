define(['exports'], (function(e){"use strict";const t={accAnnounceMovedKey:e=>"[PX][Moved "+e.itemKey+" "+e.position+" "+e.referenceKey+". éëžéëžé]",accButtonProgressComplete:e=>"[PX]["+e.label+" action completed éë]",accButtonProgressStatus:e=>"[PX]["+e.label+" action in progress éë]",accCommandKey:()=>"[PX][Command é]",accControlKey:()=>"[PX][Close é]",accPositionAfter:()=>"[PX][after é]",accPositionBefore:()=>"[PX][before é]",accReorderInstructions:e=>"[PX][Press and hold "+e.keyPressed+" and shift keys, then use the arrow keys to reorder. éëžéëžéëžéëžéëžéëž]",calendarDateConverter_parseError:e=>"[PX][Enter a complete date like this: "+e.dateExample+". éëžéëžéëž]",calendarMonthConverter_parseError:e=>"[PX][Enter a month and year like this: "+e.dateExample+". éëžéëžéëž]",chart_labelGroup:()=>"[PX][Group é]",chart_labelSeries:()=>"[PX][Series é]",chart_labelValue:()=>"[PX][Value é]",chart_labelX:()=>"[PX][X é]",chart_labelY:()=>"[PX][Y é]",checkboxSet_requiredMessageDetail:()=>"[PX][Required é]",checkbox_requiredMessageDetail:()=>"[PX][Required é]",close:()=>"[PX][Close é]",collection_loading:()=>"[PX][Loading é]",collection_noData:()=>"[PX][No data to display. é]",collection_selectAllRows:()=>"[PX][Select all rows é]",collection_selectRow:e=>"[PX][Select row "+e.ROW_NAME+" é]",collection_sortDisabled:()=>"[PX][Not sortable é]",collection_sortEnabled:()=>"[PX][Sortable é]",confirmation:()=>"[PX][Confirmation é]",datePicker_currentDate:()=>"[PX][Current date é]",datePicker_goToToday:()=>"[PX][Go to today é]",datePicker_label:()=>"[PX][Date Picker é]",datePicker_month:()=>"[PX][Month é]",datePicker_months:()=>"[PX][Months é]",datePicker_next:()=>"[PX][Next é]",datePicker_nextDecade:()=>"[PX][Next decade é]",datePicker_nextMonth:()=>"[PX][Next month é]",datePicker_prev:()=>"[PX][Previous é]",datePicker_prevDecade:()=>"[PX][Previous decade é]",datePicker_prevMonth:()=>"[PX][Previous month é]",datePicker_restricted:()=>"[PX][Restricted é]",datePicker_selected:()=>"[PX][Selected é]",datePicker_today:()=>"[PX][Today é]",datePicker_weekNum:e=>"[PX][Week "+e.NUM+" é]",datePicker_weekNumColLabel:()=>"[PX][Week Number é]",datePicker_year:()=>"[PX][Year é]",datePicker_years:()=>"[PX][Years é]",error:()=>"[PX][Error é]",expandableList_expandCollapseInstructionText:()=>"[PX][Use arrow keys to expand and collapse éëžéëž]",expandableList_groupCollapse:()=>"[PX][Collapsed é]",expandableList_groupExpand:()=>"[PX][Expanded é]",filePicker_addFiles:()=>"[PX][Add Files é]",filePicker_dropzonePrimaryText:()=>"[PX][Drag and Drop é]",filePicker_dropzoneSecondaryText:()=>"[PX][Select a file or drop one here éëžé]",filePicker_dropzoneSecondaryTextMultiple:()=>"[PX][Select or drop files here éë]",filePicker_multipleFileTypeUploadError:e=>"[PX][You can't upload files of type: "+e.fileTypes+" éëžéëžé]",filePicker_singleFileUploadError:()=>"[PX][Upload one file at a time éë]",filePicker_singleTypeUploadError:e=>"[PX][You can't upload files of type "+e.fileType+" éëžéëžé]",filePicker_unknownFileTypeUploadError:()=>"[PX][unknown é]",formControl_clear:()=>"[PX][Clear é]",formControl_day:()=>"[PX][Day é]",formControl_empty_segment:()=>"[PX][Empty é]",formControl_helpAvailable:()=>"[PX][Help available é]",formControl_hide:()=>"[PX][Hide é]",formControl_hour:()=>"[PX][Hour é]",formControl_limitReached:e=>"[PX][You’ve reached the "+({one:new Intl.NumberFormat("en-XA").format(e.CHARACTER_LIMIT)+"-character"}[new Intl.PluralRules("en-XA").select(e.CHARACTER_LIMIT)]||new Intl.NumberFormat("en-XA").format(e.CHARACTER_LIMIT)+"-character")+" limit. éëžéëžéëžéëžéëžéëžéëžé]",formControl_loading:()=>"[PX][Loading é]",formControl_maxLength:e=>"[PX][You can enter up to "+e.MAX_LENGTH+" characters. éëžéëžéë]",formControl_maxLengthRemaining:e=>"[PX]["+e.CHARACTER_COUNT+" characters left. éëžéë]",formControl_millisecond:()=>"[PX][Millisecond é]",formControl_minute:()=>"[PX][Minute é]",formControl_month:()=>"[PX][Month é]",formControl_readOnly:()=>"[PX][Read only é]",formControl_requiredMessageDetail:()=>"[PX][Enter a value. é]",formControl_second:()=>"[PX][Second é]",formControl_show:()=>"[PX][Show é]",formControl_year:()=>"[PX][Year é]",gantt_labelDate:()=>"[PX][Date é]",gantt_labelEnd:()=>"[PX][End é]",gantt_labelLabel:()=>"[PX][Label é]",gantt_labelRow:()=>"[PX][Row é]",gantt_labelStart:()=>"[PX][Start é]",indexer_disabledLabel:e=>"[PX]["+e.SECTION+". No matching section found. éëžéëž]",indexer_keyboardInstructionText:()=>"[PX][Press enter to select value. éëž]",indexer_othersLabel:()=>"#",indexer_separatorLabel:e=>"[PX][Between "+e.FROM_SECTION+" and "+e.TO_SECTION+". éëžéëžé]",indexer_touchInstructionText:()=>"[PX][Double tap and hold to enter gesture mode, then drag up or down to adjust value. éëžéëžéëžéëžéëžéëžé]",info:()=>"[PX][Info é]",inputDateMask_date_cleared:()=>"[PX][Date cleared é]",inputDateMask_dayPlaceholder:()=>"[PX][dd é]",inputDateMask_empty_segment:()=>"[PX][Empty é]",inputDateMask_monthPlaceholder:()=>"[PX][mm é]",inputDateMask_yearPlaceholder:()=>"[PX][yyyy é]",inputDatePicker_dateRangeOverflowMessageDetail:e=>"[PX][Enter a date that's on or before "+e.max+". éëžéëž]",inputDatePicker_dateRangeUnderflowMessageDetail:e=>"[PX][Enter a date that's on or after "+e.min+". éëžéëž]",inputDatePicker_dateRestrictionMessageDetail:()=>"[PX][Enter an available date. éë]",inputDatePicker_instruction:()=>"[PX][Press Tab to access the calendar. éëžé]",inputDatePicker_selectDate:()=>"[PX][Select a date é]",inputMonthMask_dateRangeOverflowMessageDetail:e=>"[PX][Enter a month and year that's on or before "+e.max+". éëžéëžéëž]",inputMonthMask_dateRangeUnderflowMessageDetail:e=>"[PX][Enter a month and year that's on or after "+e.min+". éëžéëžéëž]",inputNumber_converterParseError:()=>"[PX][Enter a number. é]",inputNumber_decrease:()=>"[PX][Decrease é]",inputNumber_increase:()=>"[PX][Increase é]",inputPassword_hidden:()=>"[PX][Password Hidden é]",inputPassword_hide:()=>"[PX][Hide Password é]",inputPassword_show:()=>"[PX][Show Password é]",inputSensitiveText_hidden:()=>"[PX][Sensitive text hidden é]",inputTimeMask_time_cleared:()=>"[PX][Time cleared é]",list_msgFetchCompleted:()=>"[PX][Loaded é]",list_msgFetchingData:()=>"[PX][Loading é]",list_suggestion:()=>"[PX][Suggestion é]",messageToast_allMessagesClosed:()=>"[PX][All toast messages are closed. éëžé]",message_close:()=>"[PX][Close é]",message_confirmation:()=>"[PX][Success é]",message_error:()=>"[PX][Error é]",message_info:()=>"[PX][Info é]",message_navigationFromMessagesRegion:()=>"[PX][Entering messages region. Press F6 to navigate back to prior focused element. éëžéëžéëžéëžéëžéëž]",message_navigationToMessagesRegion:()=>"[PX][Messages region has new messages. Press F6 to navigate to the most recent message region. éëžéëžéëžéëžéëžéëžéëž]",message_warning:()=>"[PX][Warning é]",noData_message:()=>"[PX][No items to display é]",overflowItemLabel:()=>"[PX][More Tabs é]",plural_separator:()=>", ",progressIndeterminate:()=>"[PX][In Progress é]",radio_helpForRadio:()=>"[PX][Help for radio button é]",radio_requiredMessageDetail:()=>"[PX][Select a value. é]",selectMultiple_apply:()=>"[PX][Apply é]",selectMultiple_back:()=>"[PX][Back é]",selectMultiple_countPlus:e=>e.COUNT+"+",selectMultiple_highlightSelectedTagsInstructionText:()=>"[PX][Use left and right arrow keys to highlight selected values. éëžéëžéëžéëž]",selectMultiple_removeSelectedTagInstructionText:()=>"[PX][Press Backspace or Delete to remove the selected value. éëžéëžéëžéë]",selectMultiple_selectedValues:()=>"[PX][Selected values é]",selectMultiple_showSelectedValues:()=>"[PX][Show selected values only. éë]",selectMultiple_valuesSelected:e=>"[PX]["+e.VALUE_COUNT+" values selected. éëžé]",select_addToList:()=>"[PX][Add to list é]",select_addToListAvailable:()=>"[PX][Add to list available é]",select_moreSearchOptions:()=>"[PX][More search options é]",select_moreSearchOptionsAvailable:()=>"[PX][More search options available éëž]",select_noMatchesFound:()=>"[PX][No matches found. é]",select_oneMatchFound:()=>"[PX][One match found é]",select_requiredMessageDetail:()=>"[PX][Select a value. é]",select_sizeMatchesFound:e=>"[PX]["+e.TOTAL_SIZE+" matches found éë]",select_sizeOrMoreMatchesFound:e=>"[PX]["+e.TOTAL_SIZE+" or more matches found éëžéë]",selectorAll_deselectAll:()=>"[PX][Deselect all é]",selectorAll_selectAll:()=>"[PX][Select all é]",selector_selected:()=>"[PX][Checkbox checked é]",selector_unselected:()=>"[PX][Checkbox not checked é]",tabBarNavigationList_removeCueText:()=>"[PX][Removable é]",timeComponent_tooltipZoomIn:()=>"[PX][Zoom In é]",timeComponent_tooltipZoomOut:()=>"[PX][Zoom Out é]",train_current:()=>"[PX][Current é]",train_message_type:()=>"[PX][Message Type é]",train_not_visited:()=>"[PX][Not visited é]",train_status:e=>"[PX][Step "+e.currentStep+" out of "+e.numberOfSteps+" éëžéëžé]",train_visited:()=>"[PX][Visited é]",userAssistance_learnMore:()=>"[PX][Learn more é]",userAssistance_required:()=>"[PX][Required é]",vis_clearSelection:()=>"[PX][Clear Selection é]",vis_drillable:()=>"[PX][Drillable é]",vis_labelAndValue:e=>e.LABEL+": "+e.VALUE,vis_labelCountWithTotal:e=>"[PX]["+e.itemCount+" out of "+e.totalCount+" éëžé]",vis_marqueeSelectTooltip:()=>"[PX][Marquee select é]",vis_marqueeZoomTooltip:()=>"[PX][Marquee zoom é]",vis_noData:()=>"[PX][No data to display é]",vis_panTooltip:()=>"[PX][Pan é]",vis_stateLoaded:()=>"[PX][Loaded é]",vis_stateLoading:()=>"[PX][Loading é]",vis_stateSelected:()=>"[PX][Selected é]",vis_stateUnselected:()=>"[PX][Unselected é]",warn:()=>"[PX][Warning é]"};e.default=t,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=bundle.js.map
