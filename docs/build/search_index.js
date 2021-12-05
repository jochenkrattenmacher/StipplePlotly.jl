var documenterSearchIndex = {"docs":
[{"location":"api/charts.html","page":"Charts","title":"Charts","text":"CurrentModule = Charts","category":"page"},{"location":"api/charts.html","page":"Charts","title":"Charts","text":"","category":"page"},{"location":"api/charts.html","page":"Charts","title":"Charts","text":"Font\nColorBar\nBase.Dict\noptionals!\nStipple.render\nErrorBar\nPlotAnnotation\nPlotLayoutGrid\nPlotLayoutAxis\nPlotLayoutTitle\nPlotLayoutLegend\nPlotLayout\nPlotlyLine\nPlotDataMarker\nPlotData\nPlotConfig\nplot","category":"page"},{"location":"api/charts.html#Base.Dict","page":"Charts","title":"Base.Dict","text":"Dict([itr])\n\nDict{K,V}() constructs a hash table with keys of type K and values of type V. Keys are compared with isequal and hashed with hash.\n\nGiven a single iterable argument, constructs a Dict whose key-value pairs are taken from 2-tuples (key,value) generated by the argument.\n\nExamples\n\njulia> Dict([(\"A\", 1), (\"B\", 2)])\nDict{String, Int64} with 2 entries:\n  \"B\" => 2\n  \"A\" => 1\n\nAlternatively, a sequence of pair arguments may be passed.\n\njulia> Dict(\"A\"=>1, \"B\"=>2)\nDict{String, Int64} with 2 entries:\n  \"B\" => 2\n  \"A\" => 1\n\n\n\n\n\n","category":"type"},{"location":"api/charts.html#Stipple.render","page":"Charts","title":"Stipple.render","text":"`function render`\n\nAbstract function. Needs to be specialized by plugins. It is automatically invoked by Stipple to serialize a Julia data type (corresponding to the fields in the ReactiveModel instance) to JavaScript/JSON. In general the specialized methods should return a Julia Dict which are automatically JSON encoded by Stipple. If custom JSON serialization is required for certain types in the resulting Dict, specialize JSON.lower for that specific type.\n\nExample\n\nfunction Stipple.render(ps::PlotSeries, fieldname::Union{Symbol,Nothing} = nothing)\n  Dict(:name => ps.name, ps.plotdata.key => ps.plotdata.data)\nend\n\nSpecialized JSON rendering for Undefined\n\nJSON.lower(x::Undefined) = \"__undefined__\"\n\n\n\n\n\n","category":"function"},{"location":"api/stippleplotly.html","page":"StipplePlotly","title":"StipplePlotly","text":"CurrentModule = StipplePlotly","category":"page"},{"location":"api/stippleplotly.html","page":"StipplePlotly","title":"StipplePlotly","text":"","category":"page"},{"location":"api/stippleplotly.html","page":"StipplePlotly","title":"StipplePlotly","text":"deps","category":"page"},{"location":"index.html#StipplePlotly","page":"Home","title":"StipplePlotly","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"Plotting library for Stipple.jl","category":"page"}]
}
