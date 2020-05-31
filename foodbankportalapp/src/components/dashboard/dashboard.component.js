import React, { Component } from 'react'
import AppLink from './appLink.component'

export default class DashboardComponent extends Component {

    render() {
        return (
            <div>
                <AppLink
                    appName="Scheduling Calendar"
                    appLink="/dashboard/calendar"
                />
                <AppLink
                    appName="Inventory Statistics"
                    appLink="/dashboard/inventory"
                />
                <AppLink
                    appName="Order History"
                    appLink="/dashboard/orderhistory"
                />
                <AppLink
                    appName="Manage Organization"
                    appLink="/dashboard/manage"
                />
                <AppLink
                    appName="Settings"
                    appLink="/dashboard/settings"
                />
            </div>
        )
    }
}