<script>
    import NotificationBox from "./components/notifications/NotificationBox.svelte";
    import Notification from "./components/notifications/Notification.svelte";
    import { notifications_list } from "./stores/notifications"
    import NotificationAPI from "./utils/notification_api";
    import { fly } from "svelte/transition";
    import { flip } from "svelte/animate";
</script>

<NotificationBox>
    {#each $notifications_list as notif (notif.pk)}
        <div transition:fly={{duration: 500, x: 200}} animate:flip={{duration: 500}}> 
            <Notification {...notif} />
        </div>
    {/each}
</NotificationBox>

<div class="btn-group">
    <button class="a" on:click={() => NotificationAPI.alert("alert message")}>alert</button>
    <button class="w" on:click={() => NotificationAPI.warning("warning message")}>warning</button>
    <button class="s" on:click={() => NotificationAPI.success("success message")}>success</button>
</div>

<style>
    .btn-group {
        width: 60%;
        margin: auto;
        margin-top: 300px;
        display: flex;
        justify-content: space-between;
    }
    .btn-group > button{
        padding: 8px 12px;
        border-radius: 15px;
        cursor: pointer;
    }
    .a {
        background-color: rgb(255, 143, 131);
    }
    .w {
        background-color: rgb(255, 213, 97);
    }
    .s {
        background-color: rgb(81, 255, 139);
    }
</style>