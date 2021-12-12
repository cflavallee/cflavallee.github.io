// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 
    var samples = data.samples;
    console.log(samples)
    // Create a variable that filters the samples for the object with the desired sample number.
    var samplesFilter = samples.filter(sampleObj => sampleObj.id == sample);
    console.log(samplesFilter)

    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var metaFilter = metadata.filter(sampleObj => sampleObj.id == sample);
    console.log(metaFilter)
    // Create a variable that holds the first sample in the array.
    result = samplesFilter[0];
    console.log(result)

    // 2. Create a variable that holds the first sample in the metadata array.
    result2 = metaFilter[0];
    console.log(result)

    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otu_ids = result.otu_ids;
    var otu_labels = result.otu_labels;
    var sample_values = result.sample_values;

    // 3. Create a variable that holds the washing frequency.
    var freq = parseFloat(result.wfreq).value;
    console.log(freq)
    // Create the yticks for the bar chart.

    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot("bar", barData, barLayout);
    
    // Use Plotly to plot the bubble data and layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [{		domain: { x: [0, 1], y: [0, 1] },
		              value: freq,
		              title: { text: "Wash Frequency" },
		              type: "indicator",
		              mode: "gauge+number",
                  gauge: {
                    axis: { range: [null, 10], tickwidth: 1, tickcolor: "darkblue" },
                  }
    }];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { width: 600, height: 450, margin: { t: 0, b: 0 }
     
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout);
  });
}
