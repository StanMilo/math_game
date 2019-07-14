import Board from './board';
import Panel from './panel';
import DragLogic from './drag-logic';

const Config = [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ];
const BoardGame = new Board(Config);
BoardGame.render();

const PanelGame = new Panel();
PanelGame.render();

new DragLogic()
    .onDrop(function(element, selectedElement) {
        try {
            if (selectedElement.innerHTML === '') {
                return false;
            }
            let data = element.dataset;
            BoardGame.add(data.row, data.field, selectedElement.innerHTML);
            PanelGame.moveValue();
            if (selectedElement.id === 'keep') {
                selectedElement.innerHTML = '';
            }
        } catch (error) {
            console.log(error);
        }
    })
    .onDropKeep(function(element) {
        try {
            PanelGame.moveToKeep().moveValue();
        } catch (error) {
            console.log(error);
        }
    });
