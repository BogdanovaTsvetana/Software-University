import furnitureService from '../../services/furnitureService.js';
import {dashboardTemplate} from './dashboardTemplate.js'

async function getView(context) {
    let furnitureAll = await furnitureService.getAll();
    let templateResult = dashboardTemplate(furnitureAll);
    context.renderView(templateResult);
}

export default {
    getView
}


