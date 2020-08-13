declare module 'mxgraph' {
  export interface mxGraphExportObject {
    mxClient: any;
    mxLog: typeof mxLog;
    mxObjectIdentity: any;
    mxDictionary: typeof mxDictionary;
    mxResources: typeof mxResources;
    mxPoint: typeof mxPoint;
    mxRectangle: typeof mxRectangle;
    mxEffects: any;
    mxUtils: typeof mxUtils;
    mxConstants: typeof mxConstants;
    mxEventObject: typeof mxEventObject;
    mxMouseEvent: typeof mxMouseEvent;
    mxEventSource: typeof mxEventSource;
    mxEvent: typeof mxEvent;
    mxXmlRequest: typeof mxXmlRequest;
    mxClipboard: any;
    mxWindow: any;
    mxForm: any;
    mxImage: typeof mxImage;
    mxDivResizer: any;
    mxDragSource: typeof mxDragSource;
    mxToolbar: any;
    mxUndoableEdit: typeof mxUndoableEdit;
    mxUndoManager: any;
    mxUrlConverter: typeof mxUrlConverter;
    mxPanningManager: typeof mxPanningManager;
    mxPopupMenu: typeof mxPopupMenu;
    mxAutoSaveManager: any;
    mxAnimation: any;
    mxMorphing: typeof mxMorphing;
    mxImageBundle: typeof mxImageBundle;
    mxImageExport: any;
    mxAbstractCanvas2D: typeof mxAbstractCanvas2D;
    mxXmlCanvas2D: typeof mxXmlCanvas2D;
    mxSvgCanvas2D: typeof mxSvgCanvas2D;
    mxVmlCanvas2D: typeof mxVmlCanvas2D;
    mxGuide: typeof mxGuide;
    mxShape: typeof mxShape;
    mxStencil: typeof mxStencil;
    mxStencilRegistry: typeof mxStencilRegistry;
    mxMarker: typeof mxMarker;
    mxActor: typeof mxActor;
    mxCloud: typeof mxCloud;
    mxRectangleShape: typeof mxRectangleShape;
    mxEllipse: typeof mxEllipse;
    mxDoubleEllipse: typeof mxDoubleEllipse;
    mxRhombus: typeof mxRhombus;
    mxPolyline: typeof mxPolyline;
    mxArrow: typeof mxArrow;
    mxArrowConnector: typeof mxArrowConnector;
    mxText: typeof mxText;
    mxTriangle: typeof mxTriangle;
    mxHexagon: typeof mxHexagon;
    mxLine: typeof mxLine;
    mxImageShape: typeof mxImageShape;
    mxLabel: typeof mxLabel;
    mxCylinder: typeof mxCylinder;
    mxConnector: typeof mxConnector;
    mxSwimlane: typeof mxSwimlane;
    mxGraphLayout: typeof mxGraphLayout;
    mxStackLayout: typeof mxStackLayout;
    mxPartitionLayout: any;
    mxCompactTreeLayout: typeof mxCompactTreeLayout;
    mxRadialTreeLayout: typeof mxRadialTreeLayout;
    mxFastOrganicLayout: typeof mxFastOrganicLayout;
    mxCircleLayout: typeof mxCircleLayout;
    mxParallelEdgeLayout: typeof mxParallelEdgeLayout;
    mxCompositeLayout: typeof mxCompositeLayout;
    mxEdgeLabelLayout: typeof mxEdgeLabelLayout;
    mxGraphAbstractHierarchyCell: typeof mxGraphAbstractHierarchyCell;
    mxGraphHierarchyNode: typeof mxGraphHierarchyNode;
    mxGraphHierarchyEdge: typeof mxGraphHierarchyEdge;
    mxGraphHierarchyModel: typeof mxGraphHierarchyModel;
    mxSwimlaneModel: typeof mxSwimlaneModel;
    mxHierarchicalLayoutStage: typeof mxHierarchicalLayoutStage;
    mxMedianHybridCrossingReduction: typeof mxMedianHybridCrossingReduction;
    mxMinimumCycleRemover: typeof mxMinimumCycleRemover;
    mxCoordinateAssignment: typeof mxCoordinateAssignment;
    mxSwimlaneOrdering: typeof mxSwimlaneOrdering;
    mxHierarchicalLayout: typeof mxHierarchicalLayout;
    mxSwimlaneLayout: typeof mxSwimlaneLayout;
    mxGraphModel: typeof mxGraphModel;
    mxCell: typeof mxCell;
    mxGeometry: typeof mxGeometry;
    mxCellPath: typeof mxCellPath;
    mxPerimeter: typeof mxPerimeter;
    mxPrintPreview: typeof mxPrintPreview;
    mxStylesheet: typeof mxStylesheet;
    mxCellState: typeof mxCellState;
    mxGraphSelectionModel: typeof mxGraphSelectionModel;
    mxCellEditor: typeof mxCellEditor;
    mxCellRenderer: typeof mxCellRenderer;
    mxEdgeStyle: typeof mxEdgeStyle;
    mxStyleRegistry: typeof mxStyleRegistry;
    mxGraphView: typeof mxGraphView;
    mxGraph: typeof mxGraph;
    mxCellOverlay: typeof mxCellOverlay;
    mxOutline: typeof mxOutline;
    mxMultiplicity: typeof mxMultiplicity;
    mxLayoutManager: typeof mxLayoutManager;
    mxSwimlaneManager: typeof mxSwimlaneManager;
    mxTemporaryCellStates: typeof mxTemporaryCellStates;
    mxCellStatePreview: any;
    mxConnectionConstraint: typeof mxConnectionConstraint;
    mxGraphHandler: typeof mxGraphHandler;
    mxPanningHandler: typeof mxPanningHandler;
    mxPopupMenuHandler: typeof mxPopupMenuHandler;
    mxCellMarker: typeof mxCellMarker;
    mxSelectionCellsHandler: typeof mxSelectionCellsHandler;
    mxConnectionHandler: typeof mxConnectionHandler;
    mxConstraintHandler: typeof mxConstraintHandler;
    mxRubberband: typeof mxRubberband;
    mxHandle: any;
    mxVertexHandler: typeof mxVertexHandler;
    mxEdgeHandler: typeof mxEdgeHandler;
    mxElbowEdgeHandler: typeof mxElbowEdgeHandler;
    mxEdgeSegmentHandler: typeof mxEdgeSegmentHandler;
    mxKeyHandler: typeof mxKeyHandler;
    mxTooltipHandler: typeof mxTooltipHandler;
    mxCellTracker: typeof mxCellTracker;
    mxCellHighlight: typeof mxCellHighlight;
    mxDefaultKeyHandler: any;
    mxDefaultPopupMenu: any;
    mxDefaultToolbar: any;
    mxEditor: any;
    mxCodecRegistry: typeof mxCodecRegistry;
    mxCodec: typeof mxCodec;
    mxObjectCodec: typeof mxObjectCodec;
    mxCellCodec: any;
    mxModelCodec: any;
    mxRootChangeCodec: any;
    mxChildChangeCodec: any;
    mxTerminalChangeCodec: any;
    mxGenericChangeCodec: any;
    mxGraphCodec: any;
    mxGraphViewCodec: any;
    mxStylesheetCodec: any;
    mxDefaultKeyHandlerCodec: any;
    mxDefaultToolbarCodec: any;
    mxDefaultPopupMenuCodec: any;
    mxEditorCodec: any;
  }

  export type mxGraphOptions = {
    mxBasePath?: string;
    mxImageBasePath?: string;
    mxLanguage?: string;
    mxDefaultLanguage?: string;
    mxLoadResources?: boolean;
    mxLoadStylesheets?: boolean;
  };

  export default function (options?: mxGraphOptions): mxGraphExportObject;
}
