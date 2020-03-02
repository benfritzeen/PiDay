<template>
    <div class ="main">
        <b-container fluid class="h-100">
            <b-button variant="primary" name="Monday" class="btn btn-lg button">Monday</b-button>
            <b-button variant="primary" name="Tuesday" class="btn btn-lg button">Tuesday</b-button>
            <b-button variant="primary" name="Wednesday" class="btn btn-lg button">Wednesday</b-button>
            <b-button variant="primary" name="Thursday" class="btn btn-lg button">Thursday</b-button>
            <b-button variant="primary" name="Friday" class="btn btn-lg button">Friday</b-button>
            <b-button variant="primary" name="Saturday" class="btn btn-lg button">Saturday</b-button>
            <b-button variant="primary" name="Sunday" class="btn btn-lg button">Sunday</b-button>
        </b-container>
    </div>
</template>

<style scoped>
.main {
    height: 100vh;
    background-color: lightgray;
}
.button{
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
</style>
