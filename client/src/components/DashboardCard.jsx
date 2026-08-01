function DashboardCard({title, value, icon}){

    return(

        <div className="stat-card">

            <h2>
                {icon} {value}
            </h2>

            <p>
                {title}
            </p>

        </div>

    );

}


export default DashboardCard;