NEST Desktop User Guide
=======================


This is a guide will help you find your way through the graphical interface of NEST Desktop.


Get Started
-----------

Once you start NEST Desktop, you will see the loading page with a nice picture
in which two people treat neurons as dandelions.

It checks the compatibility of configurations and databases with the application.
Once it is verified, you can click 'start' button.

.. note::
   If you think something is broken, you can reload the page.
   You may want to save a Protocol. Go to ``Configuration > Simulation`` and enter protocol details under `Protocol database`.


Concept of the layout
---------------------

Next you will see the main page of NEST Desktop with the same concept of the layout for several components:

  * Left sidebar: Navigation (it can be closed)
  * Center: Main container for the content
  * Right sidebar: Controller and configurations

NEST Desktop provides three root modules (Simulation, Model, Configuration) and
a module can be selected by clicking on stacked, colored buttons right adjacent to navigation panel.
The navigation will be rendered according to the selected module.

The navigation contains, top a section header with the name of the module and icons for the menu,
and bottom a section content with a list of items.
By clicking on an item in the navigation triggers loading the content in the main container
and if provided in the controller panel.

.. note::
   When a section provides a context menu, triggered by right mouse button,
   an icon of mouse-right-button-click appears in left bottom of the page.


The Model Module
-------------------

In the left panel, the model module shows lists the available node and synapse models. Nodes can be stimulators, neurons, or recorders.
Once you select a model, the main container displays the documentation as well as a list of parameters with default values.

In the advanced mode, you can manage the models or configure the input panel of individual parameters. It will store the changes in the model database.
In the input configuration, you can define the type of input, label, default value and the unit of the parameter.
Additionally, you can adjust the values of selected parameters using the slider or entering a value
if a value slider is selected, minimum, maximum and steps values for slider range.


The Network Module
--------------------

This network module is where you can create and modify networks.


Network sketch
^^^^^^^^^^^^^^

Network sketch is a graphical representation of the network.
You are able to drag, draw and delete node and link elements.

Network list
^^^^^^^^^^^^

It is a fixed list of nodes and links, so you can et an overview of the network.
It appears together with network sketch in simulation details.

Network selection
^^^^^^^^^^^^^^^^^

It is a list of nodes and links, in which you can set the visibility of node parameters.
It appears together with the network sketch in the network editor.

Network controller
^^^^^^^^^^^^^^^^^^

It is a list of nodes and links in which you are able to change the parameter values.
It appears together with records visualization in the simulation play.

Network editor
^^^^^^^^^^^^^^

When the view mode is set to 'edit', the network sketch area will expand to nearly the entire center panel.
The right controller shows a network selection of created nodes.
'Selected' parameters will be visible for the parameterization in the simulation mode.

You can switch to sketch configuration by clicking on 'bezier-curve' button left to the controller panel.


The Simulation Module
----------------------------

In the simulation module, a list of simulations and, if provided, protocols are displayed in the navigation panel.
You can manage (add/delete/download/upload) protocols in the menu by clicking on the 3 vertical dots icon in the navigation header.

.. note::
   Simulations cannot be deleted because they are integrated in the application.

Once you select a simulation/protocol, it will load from the database and be ready for the simulation.
In the main container, you will see the colored header and icons at the end of the header.
These icons switch views of the main container. NEST Desktop offers view mode according to icons:

* eye icon: show details of the simulation.
* pen icon: edit the network and visibility of the parameters (pen icon).
* play icon: modify the parameter values and generate the visualization of the simulation.


Simulation details
^^^^^^^^^^^^^^^^^^

When the view mode is set to 'details', you will find on top, a network sketch, and, on the bottom, a list of nodes and links.
To improve the affiliation of the nodes and links, each node is labeled by a character and a color.
Each node and link panel starts with a colored header and, if provided, a list of parameters.

You can manage elements (nodes and links) by clicking the right mouse button on the shape
in the sketch area or in the colored header. The context menu shows the a list of options that can be executed.


Simulation play
^^^^^^^^^^^^^^^

When the view mode is set to 'play', you will see a controller of nodes and links with parameters.
However, the main container remains empty because it does not find records. It is now ready to simulate and
the simulation outcome will be rendered in the main container.

The top header shows three icons: 'chart', 'braille' and 'shapes'.
The chart icon switch to chart panel in the main container.

When the recorded neurons are spatial (by clicking on context menu in node header),
it enables the 'braille' for switching to the animation of the records.

The shapes icon opens the network sketch at the bottom of the center panel to get a quick view.

You can go to the controller of the network, simulation, chart, animation, and stats of the simulation outcome
by clicking on the stacked buttons left to the controller panel


Visualization
-------------

Chart
^^^^^

The chart of the recordings is rendered by the library "Plotly".
The chart interface has dragging and zooming handlers.
You can download the snapshot of the chart.


Animation
^^^^^^^^^

The animation of the recordings with positions of recorded neurons is rendered by the three.js.


Configuration
-------------

The configuration module is a collection of various configuration of several components.
Once you modified a configuration, it will saves as JSON in local storage of the web browser.
