<template>
    <div class="card">
        <div class="card-header">
            <router-link to="/create">
                <button type="button" class="btn btn-primary">Create</button>
            </router-link>
        </div>
        <div class="table-responsive">
            <table class="table table-striped table-hover">
                <thead>
                    <tr class="bg-primary">
                        <th>Title</th>
                        <th>Desc</th>
                        <th width="100"></th>
                        <th width="100"></th>
                        <th width="100"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>etur eligendi! Asperiores ipsa reiciendis, iusto accusantium rem nulla nihil.</td>
                            <td>
                                <button type="button" class="btn btn-success"><i class="fa fa-eye"></i> View</button>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-warning"><i class="fa fa-pencil"></i> Edit</button>
                                    </td>
                                    <td>
                                        <button type="button" class="btn btn-danger "><i class="fa fa-trash"></i> Delete</button>
                                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>