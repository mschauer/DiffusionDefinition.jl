var documenterSearchIndex = {"docs":
[{"location":"#DiffusionDefinition.jl-1","page":"Home","title":"DiffusionDefinition.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"test","category":"page"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Modules = [DiffusionDefinition]","category":"page"},{"location":"#DiffusionDefinition.BoundedStateSpace","page":"Home","title":"DiffusionDefinition.BoundedStateSpace","text":"BoundedStateSpace{L,U} <: DiffusionStateSpace\n\nUpper and lower bounds imposed on the state-space of a diffusion process. L corresponds to lower bounds, U corresponds to upper bounds.\n\n\n\n\n\n","category":"type"},{"location":"#DiffusionDefinition.LowerBoundedStateSpace","page":"Home","title":"DiffusionDefinition.LowerBoundedStateSpace","text":"LowerBoundedStateSpace{T,S,N} <: DiffusionStateSpace\n\nLower bounds imposed on the state-space of a diffusion process. T is used to list the indices that have lower-bound restrictions, S indicates the values of the lower-bounds, N is the total number of coordinates with lower-bound restrictions\n\n\n\n\n\n","category":"type"},{"location":"#DiffusionDefinition.UnboundedStateSpace","page":"Home","title":"DiffusionDefinition.UnboundedStateSpace","text":"UnboundedStateSpace <: DiffusionStateSpace\n\nNo restrictions imposed on the state-space of the process (i.e. ℝᵈ)\n\n\n\n\n\n","category":"type"},{"location":"#DiffusionDefinition.UpperBoundedStateSpace","page":"Home","title":"DiffusionDefinition.UpperBoundedStateSpace","text":"UpperBoundedStateSpace{T,S,N} <: DiffusionStateSpace\n\nUpper bounds imposed on the state-space of a diffusion process. T is used to list the indices that have upper-bound restrictions, S indicates the values of the upper-bounds, N is the total number of coordinates with upper-bound restrictions\n\n\n\n\n\n","category":"type"},{"location":"#DiffusionDefinition.@diffusion_process-Tuple{Any,Expr,Vararg{Any,N} where N}","page":"Home","title":"DiffusionDefinition.@diffusion_process","text":"diffusion_process(name, ex::Expr, p...)\n\nDefines a diffusion process according to a template described in the documentation of the github repository: https://github.com/mmider/DiffusionDefinition.jl\n\n\n\n\n\n","category":"macro"},{"location":"#DiffusionDefinition.DiffusionProcess","page":"Home","title":"DiffusionDefinition.DiffusionProcess","text":"DiffusionProcess{T,DP,DW}\n\nTypes inheriting from DiffusionProcess define Ito diffusions. T denotes the datatype of each coordinate, DP the dimension of the stochastic process, DW the dimension of the Wiener process, SS lists the state space restrictions.\n\n\n\n\n\n","category":"type"},{"location":"#DiffusionDefinition.DiffusionStateSpace","page":"Home","title":"DiffusionDefinition.DiffusionStateSpace","text":"DiffusionDomain\n\nTypes inheriting from DiffusionStateSpace define the types of restrictions put on the state-space of the stochastic process.\n\n\n\n\n\n","category":"type"},{"location":"#DiffusionDefinition.LinearDiffusion","page":"Home","title":"DiffusionDefinition.LinearDiffusion","text":"LinearDiffusion{T,DP,DW,SS} <: DiffusionProcess{T,DP,DW,SS}\n\nTypes inheriting from LinearDiffusion define a linear Ito-type diffusion, i.e. solutions to stochastic differential equations of the form: dXₜ = (BₜXₜ + βₜ)dt + σₜdWₜ, t∈[0,T], X₀=x₀.\n\n\n\n\n\n","category":"type"},{"location":"#Base.Unicode.lowercase-Tuple{Symbol}","page":"Home","title":"Base.Unicode.lowercase","text":"lowercase(s::Symbol)\n\nLowercase all letters in a symbol\n\n\n\n\n\n","category":"method"},{"location":"#Base.eltype-Union{Tuple{DiffusionDefinition.DiffusionProcess{T,DP,DW,SS} where SS where DW where DP}, Tuple{T}} where T","page":"Home","title":"Base.eltype","text":"eltype(::DiffusionProcess{T}) where T = T\n\nReturn the datatype that each coordinate of the stochastic process is stored in.\n\n\n\n\n\n","category":"method"},{"location":"#DiffusionDefinition._symbol_in-Tuple{Any,Any}","page":"Home","title":"DiffusionDefinition._symbol_in","text":"_symbol_in(::Any, ::Any)\n\nReturn false by default i.e. if the first argument is not a symbol nor its quote\n\n\n\n\n\n","category":"method"},{"location":"#DiffusionDefinition._symbol_in-Tuple{QuoteNode,Any}","page":"Home","title":"DiffusionDefinition._symbol_in","text":"_symbol_in(s::QuoteNode, symbols)\n\nCheck if quote of a symbol s is listed in a list of symbols symbols\n\n\n\n\n\n","category":"method"},{"location":"#DiffusionDefinition._symbol_in-Tuple{Symbol,Any}","page":"Home","title":"DiffusionDefinition._symbol_in","text":"_symbol_in(s::Symbol, symbols)\n\nCheck if symbol s is listed in a list of symbols symbols\n\n\n\n\n\n","category":"method"},{"location":"#DiffusionDefinition.add_constdiff_function!-Tuple{Any,Any}","page":"Home","title":"DiffusionDefinition.add_constdiff_function!","text":"add_constdiff_function!(fns, p)\n\nAdd a definition of a function consdiff that indicates if the diffusion coefficient is constant\n\n\n\n\n\n","category":"method"},{"location":"#DiffusionDefinition.add_nonhypo_function!-Tuple{Any,Any,Any}","page":"Home","title":"DiffusionDefinition.add_nonhypo_function!","text":"add_nonhypo_function!(fns, line, p)\n\nAdd a definition of a function nonhypo that takes a current diffusion state x and returns the elliptic coordinates.\n\n\n\n\n\n","category":"method"},{"location":"#DiffusionDefinition.add_phi_function!-Tuple{Expr,Array{Expr,1},Symbol,Symbol,Any}","page":"Home","title":"DiffusionDefinition.add_phi_function!","text":"add_phi_function!(expr::Expr, fns::Vector{Expr}, t::Symbol, x::Symbol, p)\n\nConstruct a phi function used for conjugate updates.\n\n\n\n\n\n","category":"method"},{"location":"#DiffusionDefinition.bound_satisfied-Tuple{UnboundedStateSpace,Any}","page":"Home","title":"DiffusionDefinition.bound_satisfied","text":"bound_satisfied(::UnboundedStateSpace, x)\n\nNo restrictions, bounds satisfied by default\n\n\n\n\n\n","category":"method"},{"location":"#DiffusionDefinition.bound_satisfied-Union{Tuple{N}, Tuple{S}, Tuple{T}, Tuple{LowerBoundedStateSpace{T,S,N},Any}} where N where S where T","page":"Home","title":"DiffusionDefinition.bound_satisfied","text":"bound_satisfied(::LowerBoundedStateSpace{T,S,N}, x) where {T,S,N}\n\nChecks if all coordinates adhere to lower bound restrictions\n\n\n\n\n\n","category":"method"},{"location":"#DiffusionDefinition.bound_satisfied-Union{Tuple{N}, Tuple{S}, Tuple{T}, Tuple{UpperBoundedStateSpace{T,S,N},Any}} where N where S where T","page":"Home","title":"DiffusionDefinition.bound_satisfied","text":"bound_satisfied(::UpperBoundedStateSpace{T,S,N}, x) where {T,S,N}\n\nChecks if all coordinates adhere to upper bound restrictions\n\n\n\n\n\n","category":"method"},{"location":"#DiffusionDefinition.bound_satisfied-Union{Tuple{U}, Tuple{L}, Tuple{BoundedStateSpace{L,U},Any}} where U where L","page":"Home","title":"DiffusionDefinition.bound_satisfied","text":"bound_satisfied(::BoundedStateSpace{L,U}, x) where {L,U}\n\nChecks if all coordinates adhere to lower and upper bound restrictions\n\n\n\n\n\n","category":"method"},{"location":"#DiffusionDefinition.cleanup_param_names!-Tuple{Any,Symbol,Symbol,Any}","page":"Home","title":"DiffusionDefinition.cleanup_param_names!","text":"cleanup_param_names!(expr, t::Symbol, x::Symbol, params)\n\nA hepler function for cleaning up the names of variables in the definition of a phi function.\n\n\n\n\n\n","category":"method"},{"location":"#DiffusionDefinition.createstruct-Tuple{Any,Any,Any}","page":"Home","title":"DiffusionDefinition.createstruct","text":"createstruct(abstract_type, name, params)\n\nCreate code that defines a struct defining a diffusion process.\n\n\n\n\n\n","category":"method"},{"location":"#DiffusionDefinition.dimension-Union{Tuple{DiffusionDefinition.DiffusionProcess{T,DP,DW,SS} where SS}, Tuple{DW}, Tuple{DP}, Tuple{T}} where DW where DP where T","page":"Home","title":"DiffusionDefinition.dimension","text":"dimension(::DiffusionProcess{T,DP,DW})\n\nReturn dimension of the stochastic process and driving Brownian motion.\n\n\n\n\n\n","category":"method"},{"location":"#DiffusionDefinition.fill_unspecified_with_defaults-Tuple{Any}","page":"Home","title":"DiffusionDefinition.fill_unspecified_with_defaults","text":"fill_unspecified_with_defaults(p)\n\nFill all unspecified variables with default values\n\n\n\n\n\n","category":"method"},{"location":"#DiffusionDefinition.fill_unspecified_with_defaults-Tuple{Val{:additional},Any}","page":"Home","title":"DiffusionDefinition.fill_unspecified_with_defaults","text":"fill_unspecified_with_defaults(::Val{:additional}, p)\n\nIf unspecified, there are no restriction on a state space, the volatility coefficient is assumed constant, the diffusion is not linear and the datatype of each coordinate is set to Float64.\n\n\n\n\n\n","category":"method"},{"location":"#DiffusionDefinition.fill_unspecified_with_defaults-Tuple{Val{:dimensions},Any}","page":"Home","title":"DiffusionDefinition.fill_unspecified_with_defaults","text":"fill_unspecified_with_defaults(::Val{:dimensions}, p)\n\nIf unspecified, the dimension of the stochastic process and the driving Brownian motion is set to 1.\n\n\n\n\n\n","category":"method"},{"location":"#DiffusionDefinition.get_name_stem-Tuple{Symbol,Any}","page":"Home","title":"DiffusionDefinition.get_name_stem","text":"get_name_stem(name_stem::Symbol, parameters)\n\nGet the stem of a name for a parameters and then add a disambiguation index. Underscore _ used in place of name is defaulted to p.\n\n\n\n\n\n","category":"method"},{"location":"#DiffusionDefinition.highest_idx_used-Tuple{Any,Any}","page":"Home","title":"DiffusionDefinition.highest_idx_used","text":"highest_idx_used(name_stem, params)\n\nFind the highest disambiguation index that has been used thus far for a given name_stem.\n\n\n\n\n\n","category":"method"},{"location":"#DiffusionDefinition.parse_line!-Tuple{Val{:additional},Any,Any}","page":"Home","title":"DiffusionDefinition.parse_line!","text":"parse_line!(::Val{:additional}, line, p)\n\nParse a line that defines additional information about a diffusion process.\n\n\n\n\n\n","category":"method"},{"location":"#DiffusionDefinition.parse_line!-Tuple{Val{:conjugate},Any,Any}","page":"Home","title":"DiffusionDefinition.parse_line!","text":"parse_line!(::Val{:conjugate}, line, p)\n\nParse a line that defines conjugate updates.\n\n\n\n\n\n","category":"method"},{"location":"#DiffusionDefinition.parse_line!-Tuple{Val{:dimensions},Any,Any}","page":"Home","title":"DiffusionDefinition.parse_line!","text":"parse_line!(::Val{:dimensions}, line, p)\n\nParse a line that defines the dimension of a diffusion process and the driving Brownian motion.\n\n\n\n\n\n","category":"method"},{"location":"#DiffusionDefinition.parse_line!-Tuple{Val{:parameters},Any,Any}","page":"Home","title":"DiffusionDefinition.parse_line!","text":"parse_line!(::Val{:parameters}, line, p)\n\nParse a line that defines parameters of the diffusion. The line must be in a format:     name –> parameter-description\n\n\n\n\n\n","category":"method"},{"location":"#DiffusionDefinition.parse_lines!-Tuple{Expr,Any,Any}","page":"Home","title":"DiffusionDefinition.parse_lines!","text":"parse_lines!(ex::Expr, p, condition)\n\nParse all lines of the expression ex, but process only those which satisfy condition. p is a passed-around structure that accumulates processed information.\n\n\n\n\n\n","category":"method"},{"location":"#DiffusionDefinition.parse_param_multi_names-Tuple{Any,Any}","page":"Home","title":"DiffusionDefinition.parse_param_multi_names","text":"parse_param_multi_names(line, p)\n\nParse a line that defines parameters of the diffusion. The line must be in one of the formats:     (pname1, pname2, ...) –> (numberofparameters, datatype)     (pname1, pname2, ...) –> datatype     (pname1, pname2, ...) –> (datatype1, datatype2, ...) In the former two cases defines number_of_parameters-many parameters, with names p_name1, p_name2, ... and of datatype type. In the last case the datatypes differ from parameter to parameter.\n\n\n\n\n\n","category":"method"},{"location":"#DiffusionDefinition.parse_param_single_name-Tuple{Any,Any}","page":"Home","title":"DiffusionDefinition.parse_param_single_name","text":"parse_param_single_name(line, p)\n\nParse a line that defines parameters of the diffusion. The line must be in one of the formats:     parametername –> (numberofparameters, datatype)     parametername –> datatype In the former case defines number_of_parameters-many parameters, with names parameter_namei and of datatype type. In the latter case defines a single parameters with name parameter_name and of type datatype.\n\n\n\n\n\n","category":"method"},{"location":"#DiffusionDefinition.parse_process-Tuple{Any,Expr,Any}","page":"Home","title":"DiffusionDefinition.parse_process","text":"parse_process(name , ex::Expr, ::Any)\n\nParse a template defining a diffusion process, create a corresponding struct and specified functions, evaluate them in the environment of a package and then import the struct name to Main scope, in which the package has been imported to.\n\n\n\n\n\n","category":"method"},{"location":"#DiffusionDefinition.prepare_abstract_type-NTuple{4,Any}","page":"Home","title":"DiffusionDefinition.prepare_abstract_type","text":"prepare_abstract_type(stem, dims, data_type, state_restr)\n\nCreate a string defining a parent, abstract type from its stem, the dimensions dims of the process and the driving Brownian motion, the datatype data_type of each coordinate and the restrictions on the state space state_restr.\n\n\n\n\n\n","category":"method"},{"location":"#DiffusionDefinition.state_space-Union{Tuple{DiffusionDefinition.DiffusionProcess{T,DP,DW,SS}}, Tuple{SS}, Tuple{DW}, Tuple{DP}, Tuple{T}} where SS where DW where DP where T","page":"Home","title":"DiffusionDefinition.state_space","text":"state_space(::DiffusionProcess{T,DP,DW,SS})\n\nReturn the state space restrictions.\n\n\n\n\n\n","category":"method"},{"location":"#DiffusionDefinition.update_label-Tuple{Any,Any}","page":"Home","title":"DiffusionDefinition.update_label","text":"update_label(line, current_label)\n\nUpdate the label, which signifies what type of information a given line in a template is supposed to be encoding.\n\n\n\n\n\n","category":"method"}]
}
