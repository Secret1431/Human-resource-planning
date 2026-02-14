import MuiSkeleton from '@mui/material/Skeleton';

function Skeleton() {
    return (
        <div>
            {[...Array(5)].map((_, i) => (
                <MuiSkeleton variant='text' height={50} />
            ))}
        </div>
    )
}

export default Skeleton;