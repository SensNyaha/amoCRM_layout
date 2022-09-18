import { videoTriggersHoverEffect } from "./modules/videoTriggersEffect.js";
import { loadYTVideoThumbnail } from "./modules/loadYTVideoThumbnail.js";
import { bindMask } from './modules/phonemask.js';
import { bindingCalculator } from './modules/calculatorActions.js';
import { bindSendButtons } from './modules/formSendButtons.js'
import { bindingWidgetCards } from './modules/widgetCards.js';
import { widgetsScrollBar } from './modules/widgetsScrollBar.js';
import {thanksGrid, openLetterFully} from './modules/thanksGrid.js';
import {bindAccordeon} from './modules/accordeonOpening.js';
import {bindConfidential} from './modules/confidential.js';
import {bindAnchors} from './modules/anchors.js';
import {openAndFillPopup} from './modules/popups.js';

videoTriggersHoverEffect();
loadYTVideoThumbnail();
bindMask();
bindingCalculator();
bindSendButtons();
bindingWidgetCards();
widgetsScrollBar();
thanksGrid();
openLetterFully();
bindAccordeon();
bindConfidential();
bindAnchors();
openAndFillPopup();