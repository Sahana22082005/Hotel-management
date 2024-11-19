class Message extends Component
{
    state={
        message:"AIDS"
    }
    clickdemo()
    {
        this.setState(
            {
                message:"Welcome all"
            }
        )
    }
}