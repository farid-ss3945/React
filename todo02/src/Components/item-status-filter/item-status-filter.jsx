import "./item-status-filter.css"
const ItemStatusFilter = ({filter, onFilterChange}) => {
    const buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ];

    return (
        <div className="btn-group">
            {buttons.map(({name, label}) => {
                const className = name === filter ? 'btn btn-info' : 'btn btn-outline-secondary';
                return (
                    <button
                        key={name}
                        type="button"
                        className={className}
                        onClick={() => onFilterChange(name)}
                    >
                        {label}
                    </button>
                )
            })}
        </div>
    )
}

export default ItemStatusFilter;